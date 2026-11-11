import { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from "ogl";

/**
 * CurvedGallery — concave "inside a curved wall of screens" WebGL gallery.
 *
 * ── TUNING ─────────────────────────────────────────────────────────────
 * BEND_DEPTH  — cosine amplitude: how much each panel bows inward (world units).
 * ARC_RADIUS  — radius of the shared arc the panels sit on; smaller = tighter
 *               curve (larger angle per panel), larger = flatter wall.
 * ───────────────────────────────────────────────────────────────────────
 */
const BEND_DEPTH = 0.55;
const ARC_RADIUS = 14;

const PANEL_HEIGHT = 7.4; // world units
const PANEL_ASPECT = 0.72; // width / height of each vertical panel
const PANEL_GAP = 0.35; // world-unit gap between panels along the arc
const CAM_FOV = 45;
const MAX_DPR = 2;

export interface GalleryItem {
  src: string;
  caption: string; // e.g. "WORKS — 2025"
  sub?: string;
  href: string;
}

interface EngineRefs {
  raf: number;
  visible: boolean;
  running: boolean;
}

function supportsWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const VERT = /* glsl */ `
attribute vec2 uv;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uBend;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  // True concave bend: cosine of normalized X pushes the panel's center away,
  // so every photo bows inward toward the viewer at its edges.
  p.z -= uBend * cos((uv.x - 0.5) * 3.1415926);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
uniform sampler2D tMap;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform float uLoaded;
varying vec2 vUv;
void main() {
  // Cover-fit: preserve the photo's aspect ratio inside the panel.
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  vec3 col = texture2D(tMap, uv).rgb;
  // Subtle edge vignette for depth.
  float vig = smoothstep(0.9, 0.35, distance(vUv, vec2(0.5)));
  col *= mix(0.5, 1.0, vig);
  gl_FragColor = vec4(col * uLoaded, 1.0);
}
`;

/** Desktop-only WebGL renderer. Never mounted below 768px. */
function DesktopCurve({ items, onNavigate }: { items: GalleryItem[]; onNavigate: (href: string) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const renderer = new Renderer({ dpr: Math.min(MAX_DPR, window.devicePixelRatio || 1), alpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    // Never intercept clicks — the DOM caption/click overlay sits on top.
    gl.canvas.style.pointerEvents = "none";
    wrap.insertBefore(gl.canvas, wrap.firstChild);

    const camera = new Camera(gl, { fov: CAM_FOV });
    camera.position.set(0, 0, 0); // camera sits at the arc's center — true concave wall
    const scene = new Transform();
    const group = new Transform();
    group.setParent(scene);

    const panelW = PANEL_HEIGHT * PANEL_ASPECT;
    const anglePerPanel = (panelW + PANEL_GAP) / ARC_RADIUS;
    const geometry = new Plane(gl, { widthSegments: 32, heightSegments: 8 });

    const meshes = items.map((item, i) => {
      const texture = new Texture(gl, { generateMipmaps: false });
      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          tMap: { value: texture },
          uImageSizes: { value: [1, 1] },
          uPlaneSizes: { value: [panelW, PANEL_HEIGHT] },
          uBend: { value: 0 },
          uLoaded: { value: 0 },
        },
      });
      const mesh = new Mesh(gl, { geometry, program });
      const theta = i * anglePerPanel;
      mesh.scale.set(panelW, PANEL_HEIGHT, 1);
      mesh.setParent(group);
      return { mesh, program, texture, theta, loaded: false, loading: false, fade: 0, item };
    });

    // Lazy texture loader — only fetch a photo once its panel nears the view.
    const loadTexture = (m: (typeof meshes)[number]) => {
      if (m.loading || m.loaded) return;
      m.loading = true;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        m.texture.image = img;
        m.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
        m.loaded = true;
      };
      img.src = m.item.src;
    };

    // Total angular span of the whole set — the loop wraps modulo this,
    // so scrolling is infinite in both directions.
    const totalAngle = items.length * anglePerPanel;

    // Smoothed inputs
    let scrollTarget = 0;
    let scrollCur = 0;
    let mouseTarget = 0;
    let mouseCur = 0;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollTarget += (Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * 0.0009;
    };
    const onMouseMove = (e: MouseEvent) => {
      mouseTarget = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
    };
    wrap.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h);
      camera.perspective({ aspect: w / h });
    };
    resize();
    window.addEventListener("resize", resize);

    const refs: EngineRefs = { raf: 0, visible: true, running: false };
    const io = new IntersectionObserver(([entry]) => {
      refs.visible = entry.isIntersecting;
      if (refs.visible && !refs.running) start();
    });
    io.observe(wrap);

    const focal = () => wrap.clientHeight / (2 * Math.tan((CAM_FOV * Math.PI) / 360));

    const frame = () => {
      if (!refs.visible) {
        refs.running = false;
        return; // paused offscreen — zero GPU work
      }
      refs.raf = requestAnimationFrame(frame);

      // Smooth easing — no jitter.
      scrollCur += (scrollTarget - scrollCur) * 0.075;
      mouseCur += (mouseTarget - mouseCur) * 0.06;

      const rot = scrollCur + mouseCur * 0.06;

      const f = focal();
      const halfW = wrap.clientWidth / 2;
      const halfH = wrap.clientHeight / 2;

      for (let i = 0; i < meshes.length; i++) {
        const m = meshes[i];
        // Wrap each panel's angle into [-totalAngle/2, totalAngle/2) around the
        // camera axis — panels leaving one side re-enter on the other (infinite loop).
        let phi = (m.theta + rot) % totalAngle;
        if (phi < -totalAngle / 2) phi += totalAngle;
        else if (phi >= totalAngle / 2) phi -= totalAngle;
        m.mesh.position.set(Math.sin(phi) * ARC_RADIUS, 0, -Math.cos(phi) * ARC_RADIUS);
        m.mesh.rotation.y = -phi; // face the camera at the arc center
        const visible = Math.abs(phi) < Math.PI / 2.6;
        // Cull panels outside the view — the set spans more than a full circle,
        // so without this, wrapped-around panels would overlap in view.
        m.mesh.visible = Math.abs(phi) < Math.PI / 2.2;

        if (Math.abs(phi) < Math.PI / 2) loadTexture(m);
        if (m.loaded && m.fade < 1) {
          m.fade = Math.min(1, m.fade + 0.04);
          m.program.uniforms.uLoaded.value = m.fade;
        }
        // Bend intensity breathes with motion (scroll delta + mouse), on top of a base.
        const motion = Math.abs(scrollTarget - scrollCur) * 6 + Math.abs(mouseCur) * 0.4;
        m.program.uniforms.uBend.value = BEND_DEPTH * (0.75 + Math.min(0.6, motion));

        // Project the panel center to screen space for the DOM caption card.
        const card = cardRefs.current[i];
        if (card) {
          if (!visible) {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
          } else {
            const z = Math.cos(phi) * ARC_RADIUS;
            const x = Math.sin(phi) * ARC_RADIUS;
            const sx = (x / z) * f + halfW;
            const scale = f / z;
            const wPx = panelW * scale;
            const hPx = PANEL_HEIGHT * scale;
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
            card.style.transform = `translate3d(${(sx - wPx / 2).toFixed(1)}px, ${(halfH - hPx / 2).toFixed(1)}px, 0)`;
            card.style.width = `${wPx.toFixed(1)}px`;
            card.style.height = `${hPx.toFixed(1)}px`;
          }
        }
      }
      renderer.render({ scene, camera });
    };
    const start = () => {
      refs.running = true;
      refs.raf = requestAnimationFrame(frame);
    };
    start();

    return () => {
      cancelAnimationFrame(refs.raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      wrap.removeEventListener("wheel", onWheel);
      // Clean teardown — no leaked canvas or GL context when crossing 768px.
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      gl.canvas.remove();
    };
  }, [items]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-black">
      {/* DOM layer: captions + click targets, projected to match each WebGL panel */}
      {items.map((item, i) => (
        <a
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.href);
          }}
          className="absolute top-0 left-0 flex flex-col justify-end group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
          style={{ opacity: 0, willChange: "transform" }}
          aria-label={item.caption}
        >
          <div className="translate-y-full pt-2 px-0.5 flex justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 group-hover:text-white transition-colors duration-500">
            <span className="shrink-0">{item.sub}</span>
            <span className="text-right leading-tight truncate">{item.caption}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ── MOBILE-ONLY curved carousel (<768px). Separate branch by design: it
   duplicates (never edits) the desktop shaders/engine so the desktop path is
   byte-for-byte untouched. Panel size is derived from the viewport each
   resize so the hero panel fills the screen with a deliberate ~11% peek. ── */
const M_ARC_RADIUS = 14;
const M_BEND_DEPTH = 0.42;
const M_PEEK_FRAC = 0.11; // fraction of screen width the next panel peeks in
const M_PANEL_W_FRAC = 0.76; // active panel width as fraction of screen width
const M_PANEL_H_FRAC = 0.74; // max active panel height as fraction of viewport

// Mobile copy of the fragment shader with an extra uDim uniform so neighbors
// can be dimmed as they leave center (desktop FRAG stays untouched).
const M_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D tMap;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform float uLoaded;
uniform float uDim;
varying vec2 vUv;
void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  vec3 col = texture2D(tMap, uv).rgb;
  float vig = smoothstep(0.9, 0.35, distance(vUv, vec2(0.5)));
  col *= mix(0.5, 1.0, vig);
  gl_FragColor = vec4(col * uLoaded * uDim, 1.0);
}
`;

function MobileCurve({ items, onNavigate }: { items: GalleryItem[]; onNavigate: (href: string) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const renderer = new Renderer({ dpr: Math.min(MAX_DPR, window.devicePixelRatio || 1), alpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    gl.canvas.style.pointerEvents = "none";
    wrap.insertBefore(gl.canvas, wrap.firstChild);

    const camera = new Camera(gl, { fov: CAM_FOV });
    camera.position.set(0, 0, 0);
    const scene = new Transform();
    const group = new Transform();
    group.setParent(scene);

    // 32+ width segments keeps the cosine bend smooth (not creased) on phones too.
    const geometry = new Plane(gl, { widthSegments: 32, heightSegments: 8 });

    // Viewport-derived layout (recomputed on resize).
    let panelW = 1;
    let panelH = 1;
    let anglePerPanel = 0.3;
    let totalAngle = items.length * anglePerPanel;

    const focal = () => wrap.clientHeight / (2 * Math.tan((CAM_FOV * Math.PI) / 360));

    const layout = () => {
      const W = wrap.clientWidth;
      const H = wrap.clientHeight;
      const f = focal();
      // Size the centered panel from the viewport: M_PANEL_W_FRAC of the width
      // and M_PANEL_H_FRAC of the height, derived independently — the shader
      // cover-fits (crops) the photo, so the tall hero panel fills the screen
      // on any device shape. This is what kills the empty black bands.
      panelW = (M_PANEL_W_FRAC * W * M_ARC_RADIUS) / f;
      panelH = (M_PANEL_H_FRAC * H * M_ARC_RADIUS) / f;
      // Place the neighbor so its inner edge peeks M_PEEK_FRAC of the screen
      // width past the edge — a deliberate, symmetrical peek, not a sliver.
      const wPx = (panelW * f) / M_ARC_RADIUS;
      const neighborCenterX = W / 2 - M_PEEK_FRAC * W + (wPx * 0.94) / 2;
      anglePerPanel = Math.atan(neighborCenterX / f);
      totalAngle = items.length * anglePerPanel;
      for (const m of meshes) {
        m.mesh.scale.set(panelW, panelH, 1);
        m.program.uniforms.uPlaneSizes.value = [panelW, panelH];
      }
    };

    const meshes = items.map((item) => {
      const texture = new Texture(gl, { generateMipmaps: false });
      const program = new Program(gl, {
        vertex: VERT,
        fragment: M_FRAG,
        uniforms: {
          tMap: { value: texture },
          uImageSizes: { value: [1, 1] },
          uPlaneSizes: { value: [1, 1] },
          uBend: { value: M_BEND_DEPTH },
          uLoaded: { value: 0 },
          uDim: { value: 1 },
        },
      });
      const mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(group);
      return { mesh, program, texture, loaded: false, loading: false, fade: 0, item };
    });

    const loadTexture = (m: (typeof meshes)[number]) => {
      if (m.loading || m.loaded) return;
      m.loading = true;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        m.texture.image = img;
        m.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
        m.loaded = true;
      };
      img.src = m.item.src;
    };

    // Touch-driven rotation with momentum + snap-to-panel.
    let scrollTarget = 0;
    let scrollCur = 0;
    let touchX = 0;
    let touchY = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0; // rad per ms
    let dragging = false;
    let horizontal: boolean | null = null;
    let movedPx = 0;
    let activeIdx = 0;
    const RAD_PER_PX = () => anglePerPanel / (wrap.clientWidth * 0.8); // ~one panel per 80%-width swipe

    const mod = (n: number, m: number) => ((n % m) + m) % m;
    const snap = () => {
      // Nearest whole panel — keeps one hero panel centered, always.
      scrollTarget = -Math.round(-scrollTarget / anglePerPanel) * anglePerPanel;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchX = lastX = t.clientX;
      touchY = t.clientY;
      lastT = e.timeStamp;
      dragging = true;
      horizontal = null;
      movedPx = 0;
      velocity = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const t = e.touches[0];
      const dx = t.clientX - touchX;
      const dy = t.clientY - touchY;
      if (horizontal === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        horizontal = Math.abs(dx) > Math.abs(dy); // direction lock
      }
      if (!horizontal) return; // vertical gesture — let the browser scroll the page
      e.preventDefault(); // horizontal swipe stays inside the canvas, no page overflow
      const frameDx = t.clientX - lastX;
      const dt = Math.max(1, e.timeStamp - lastT);
      velocity = (frameDx * RAD_PER_PX()) / dt;
      lastX = t.clientX;
      lastT = e.timeStamp;
      movedPx += Math.abs(frameDx);
      scrollTarget += frameDx * RAD_PER_PX();
    };
    const onTouchEnd = () => {
      dragging = false;
      // Fling: project the release velocity forward, then snap to a panel.
      scrollTarget += velocity * 220;
      snap();
    };
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchmove", onTouchMove, { passive: false });
    wrap.addEventListener("touchend", onTouchEnd, { passive: true });
    // Suppress the tap-click after a real drag so panels only open on taps;
    // a clean tap on an edge peek advances the carousel to that neighbor.
    const onClickCapture = (e: MouseEvent) => {
      if (movedPx > 10) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      const W = wrap.clientWidth;
      const nearest = Math.round(-scrollTarget / anglePerPanel);
      if (e.clientX > W * 0.84) {
        e.stopPropagation();
        e.preventDefault();
        scrollTarget = -(nearest + 1) * anglePerPanel;
      } else if (e.clientX < W * 0.16) {
        e.stopPropagation();
        e.preventDefault();
        scrollTarget = -(nearest - 1) * anglePerPanel;
      }
    };
    wrap.addEventListener("click", onClickCapture, true);

    const resize = () => {
      renderer.setSize(wrap.clientWidth, wrap.clientHeight);
      camera.perspective({ aspect: wrap.clientWidth / wrap.clientHeight });
      layout();
    };
    resize();
    window.addEventListener("resize", resize);

    const refs: EngineRefs = { raf: 0, visible: true, running: false };
    const maybeStart = () => {
      if (refs.visible && !document.hidden && !refs.running) start();
    };
    const io = new IntersectionObserver(([entry]) => {
      refs.visible = entry.isIntersecting;
      maybeStart();
    });
    io.observe(wrap);
    // Also pause when the tab is backgrounded — no battery drain.
    const onVisibility = () => maybeStart();
    document.addEventListener("visibilitychange", onVisibility);

    const frame = () => {
      if (!refs.visible || document.hidden) {
        refs.running = false;
        return;
      }
      refs.raf = requestAnimationFrame(frame);

      scrollCur += (scrollTarget - scrollCur) * (dragging ? 0.35 : 0.1);

      const f = focal();
      const halfW = wrap.clientWidth / 2;
      const halfH = wrap.clientHeight / 2;

      // Active panel index for the caption + progress readout.
      const idx = mod(Math.round(-scrollCur / anglePerPanel), items.length);
      if (idx !== activeIdx) {
        activeIdx = idx;
        setActive(idx);
      }

      for (let i = 0; i < meshes.length; i++) {
        const m = meshes[i];
        let phi = (i * anglePerPanel + scrollCur) % totalAngle;
        if (phi < -totalAngle / 2) phi += totalAngle;
        else if (phi >= totalAngle / 2) phi -= totalAngle;

        // Center-distance factor: 0 at center, 1 at one-panel offset.
        const t = Math.min(1, Math.abs(phi) / anglePerPanel);
        // Centered panel flat-on and bright; neighbors curve in, shrink, dim.
        const s = 1 - 0.06 * t;
        m.mesh.scale.set(panelW * s, panelH * s, 1);
        m.mesh.position.set(Math.sin(phi) * M_ARC_RADIUS, 0, -Math.cos(phi) * M_ARC_RADIUS);
        m.mesh.rotation.y = -phi;
        m.program.uniforms.uDim.value = 1 - 0.45 * t;
        m.program.uniforms.uBend.value = M_BEND_DEPTH * (0.35 + 0.85 * t);

        const visible = Math.abs(phi) < Math.PI / 2.6;
        m.mesh.visible = Math.abs(phi) < Math.PI / 2.2;

        if (Math.abs(phi) < anglePerPanel * 2.5) loadTexture(m);
        if (m.loaded && m.fade < 1) {
          m.fade = Math.min(1, m.fade + 0.05);
          m.program.uniforms.uLoaded.value = m.fade;
        }

        // Invisible DOM tap target projected over each panel.
        const card = cardRefs.current[i];
        if (card) {
          if (!visible) {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
          } else {
            const z = Math.cos(phi) * M_ARC_RADIUS;
            const x = Math.sin(phi) * M_ARC_RADIUS;
            const sx = (x / z) * f + halfW;
            const scale = f / z;
            const wPx = panelW * s * scale;
            const hPx = panelH * s * scale;
            card.style.opacity = "1";
            // Only the centered hero is tappable — neighbor rectangles overlap
            // the hero in DOM space, so leaving them active would steal taps.
            card.style.pointerEvents = t < 0.5 ? "auto" : "none";
            card.style.transform = `translate3d(${(sx - wPx / 2).toFixed(1)}px, ${(halfH - hPx / 2).toFixed(1)}px, 0)`;
            card.style.width = `${wPx.toFixed(1)}px`;
            card.style.height = `${hPx.toFixed(1)}px`;
          }
        }
      }
      renderer.render({ scene, camera });
    };
    const start = () => {
      refs.running = true;
      refs.raf = requestAnimationFrame(frame);
    };
    start();

    return () => {
      cancelAnimationFrame(refs.raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchmove", onTouchMove);
      wrap.removeEventListener("touchend", onTouchEnd);
      wrap.removeEventListener("click", onClickCapture, true);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      gl.canvas.remove();
    };
  }, [items]);

  const current = items[active];

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-black touch-pan-y">
      {/* Invisible tap targets projected over each panel */}
      {items.map((item, i) => (
        <a
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.href);
          }}
          className="absolute top-0 left-0 block focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
          style={{ opacity: 0, willChange: "transform" }}
          aria-label={item.caption}
        />
      ))}
      {/* Active caption + progress — crossfades on panel change */}
      <div className="absolute inset-x-0 bottom-0 pb-[max(1.25rem,env(safe-area-inset-bottom))] px-6 pointer-events-none flex flex-col items-center gap-2">
        <div
          key={active}
          className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 animate-in fade-in duration-500"
        >
          {current?.caption}
          {current?.sub ? <span className="text-white/55"> — {current.sub}</span> : null}
        </div>
        <div className="font-mono text-[9px] tracking-[0.3em] text-white/50">
          {String(active + 1).padStart(2, "0")} / {items.length}
        </div>
      </div>
    </div>
  );
}

/** No-WebGL fallback: plain, flat, performant — no canvas ever mounts. */
function FlatGallery({ items, onNavigate }: { items: GalleryItem[]; onNavigate: (href: string) => void }) {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-20 pb-16 px-4">
      <div className="flex flex-col gap-8 max-w-md mx-auto">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.href);
            }}
            className="block group"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-950 border border-white/5">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover max-w-full"
              />
            </div>
            <div className="mt-2 flex justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
              <span>{item.sub}</span>
              <span className="text-right leading-tight">{item.caption}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function CurvedGallery({ items, onNavigate }: { items: GalleryItem[]; onNavigate: (href: string) => void }) {
  const [mode, setMode] = useState<"desktop" | "mobileCurve" | "flat" | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const decide = () => {
      const webgl = supportsWebGL();
      // Desktop path untouched; below 768px the curve now renders via the
      // separate mobile branch, with the flat list kept for no-WebGL devices.
      setMode(mq.matches && webgl ? "desktop" : webgl ? "mobileCurve" : "flat");
    };
    decide();
    // Crossing the 768px line swaps the trees entirely — React unmounts the
    // WebGL component, whose cleanup disposes the GL context and canvas.
    mq.addEventListener("change", decide);
    return () => mq.removeEventListener("change", decide);
  }, []);

  if (mode === null) return <div className="w-full h-full bg-black" />;
  if (mode === "desktop") return <DesktopCurve items={items} onNavigate={onNavigate} />;
  if (mode === "mobileCurve") return <MobileCurve items={items} onNavigate={onNavigate} />;
  return <FlatGallery items={items} onNavigate={onNavigate} />;
}

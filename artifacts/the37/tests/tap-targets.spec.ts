import { expect, test, type Page } from "@playwright/test";

const MINIMUM_TARGET_SIZE = 44;
const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([type='hidden']):not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[role='button']",
  "[role='link']",
  "[contenteditable='true']",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

async function expectControlsPresent(
  page: Page,
  groups: Record<string, string>,
) {
  for (const [name, selector] of Object.entries(groups)) {
    await expect(
      page.locator(selector),
      `${name} must remain covered by the mobile target audit`,
    ).not.toHaveCount(0);
  }
}

async function auditMobileTapTargets(page: Page) {
  const route = new URL(page.url()).pathname;
  const failures = await page.evaluate(
    ({ interactiveSelector, minimumTargetSize }) =>
      Array.from(document.querySelectorAll<HTMLElement>(interactiveSelector))
        .filter((element) => {
          const style = window.getComputedStyle(element);
          return (
            !element.closest("[aria-hidden='true']") &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            style.visibility !== "collapse" &&
            style.opacity !== "0" &&
            style.pointerEvents !== "none" &&
            element.getClientRects().length > 0
          );
        })
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const text = element.textContent?.replace(/\s+/g, " ").trim();
          const label =
            element.getAttribute("aria-label") ||
            element.getAttribute("title") ||
            text ||
            element.getAttribute("href") ||
            "(unlabelled)";

          return {
            label: label.slice(0, 100),
            tag: element.tagName.toLowerCase(),
            width: rect.width,
            height: rect.height,
          };
        })
        .filter(
          ({ width, height }) =>
            width + Number.EPSILON < minimumTargetSize ||
            height + Number.EPSILON < minimumTargetSize,
        ),
    {
      interactiveSelector: INTERACTIVE_SELECTOR,
      minimumTargetSize: MINIMUM_TARGET_SIZE,
    },
  );

  expect(
    failures,
    [
      `${route}: visible controls must render at least ${MINIMUM_TARGET_SIZE}×${MINIMUM_TARGET_SIZE} CSS pixels.`,
      ...failures.map(
        ({ tag, label, width, height }) =>
          `- ${route} <${tag}> "${label}": ${width.toFixed(1)}×${height.toFixed(1)}`,
      ),
    ].join("\n"),
  ).toEqual([]);
}

test.beforeEach(async ({ page }) => {
  await page.route("**/*", async (route) => {
    const type = route.request().resourceType();
    if (type === "image" || type === "media" || type === "font") {
      await route.abort();
      return;
    }
    await route.continue();
  });
});

test("cause page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/cause/longevity-escape-velocity", {
    waitUntil: "domcontentloaded",
  });

  await expectControlsPresent(page, {
    "citation controls": "button[aria-label^='Jump to source ']",
    "source links": "a[id*='-src-']",
    "organization links": "a[target='_blank']:not([id*='-src-'])",
    "cause navigation": "a[href*='/cause/']",
  });
  await auditMobileTapTargets(page);
});

test("dimensions page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/dimensions", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "cause navigation": "a[href*='/cause/']",
  });
  await auditMobileTapTargets(page);
});

test("home page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "story navigation": "button:has-text('Skip story')",
  });
  await auditMobileTapTargets(page);
});

test("prelude page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/prelude", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "next-screen controls": "button[aria-label='Next screen']",
    "external closing link": "a[target='_blank']",
    "founder navigation": "a[href='/about']",
  });
  await auditMobileTapTargets(page);
});

test("atlas page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/causes", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "gallery navigation": "a[href*='/cause/']",
  });
  await auditMobileTapTargets(page);
});

test("filtered atlas controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/atlas/substrate", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "filtered gallery navigation": "a[href*='/cause/']",
  });
  await auditMobileTapTargets(page);
});

test("story page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/atlas", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "dimension navigation": "button[aria-label*='causes']",
  });
  await auditMobileTapTargets(page);
});

test("information page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/infos", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "next-screen controls": "button[aria-label='Next screen']",
  });
  await auditMobileTapTargets(page);
});

test("about page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/about", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "next-screen controls": "button[aria-label='Next screen']",
    "external people links": "a[target='_blank']",
    "site navigation": "a[href^='/']",
  });
  await auditMobileTapTargets(page);
});

test("contacts page controls meet the mobile tap-target minimum", async ({
  page,
}) => {
  await page.goto("/contacts", { waitUntil: "domcontentloaded" });

  await expectControlsPresent(page, {
    "form controls":
      "input[name='name'], input[name='email'], textarea[name='message'], button[role='combobox'], button[type='submit']",
  });
  await auditMobileTapTargets(page);
});
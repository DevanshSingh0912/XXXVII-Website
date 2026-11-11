import { useEffect } from "react";

/**
 * Injects a JSON-LD <script> block into <head> for the lifetime of the
 * component. On unmount the script is removed, so navigating away from a
 * page cleans up its structured-data block automatically.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  // Stringify so the effect only re-runs when the data actually changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);

  return null;
}

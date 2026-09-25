const localPages = new Set([
  "/",
  "/solutions",
  "/reputation-management-pricing",
  "/faq",
  "/contacts",
  "/risk-control-center",
  "/company",
  "/case-studies",
  "/rh-detection",
  "/rh-control",
  "/rh-defence",
  "/rh-personal",
  "/team",
  "/online-reputation-monitoring",
  "/social-listening",
  "/brand-audit",
  "/ai-brand-monitoring",
  "/digital-risk-protection",
  "/brand-reputation-services",
  "/serm-services",
  "/online-review-management",
  "/ai-influence-services",
  "/brand-positioning-services",
  "/brand-launch-strategy",
  "/employer-reputation-management",
  "/brand-protection-services",
  "/online-reputation-repair",
  "/crisis-management-agency",
  "/business-media-presence",
]);

export function resolveSiteLink(href: string) {
  const value = href.trim();
  if (!value.startsWith("https://reputation.house")) return value;
  const url = new URL(value);
  const path = url.pathname.replace(/\/$/, "") || "/";
  return url.hostname === "reputation.house" && localPages.has(path)
    ? `${path}${url.search}${url.hash}`
    : value;
}

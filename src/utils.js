export function createPageUrl(pageName) {
  if (!pageName) return "/";
  const slug = pageName.trim().toLowerCase();
  if (slug === "home") return "/";
  return `/${slug}`;
}

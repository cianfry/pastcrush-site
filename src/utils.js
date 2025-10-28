export function createPageUrl(pageName) {
  // Converts "Home" -> "/", "About" -> "/about"
  if (!pageName || pageName.toLowerCase() === "home") {
    return "/";
  }
  return `/${pageName.toLowerCase()}`;
}

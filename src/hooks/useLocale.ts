export function useLocale(): "en" | "ko" {
  if (
    window.location.pathname === "/en" ||
    window.location.pathname.startsWith("/en/")
  ) {
    return "en";
  }

  return "ko";
}

import { useEffect, useState } from "react"

type NavItem = { name: string; href: string }
export function useActiveSection(navItems: NavItem[]) {
  const [active, setActive] = useState(navItems[0].href)

  useEffect(() => {
    function onScroll() {
      let current = navItems[0].href
      for (const item of navItems) {
        const section = document.querySelector(item.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            current = item.href
          }
        }
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [navItems])

  return active
}

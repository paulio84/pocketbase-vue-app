import { ref, watch } from "vue"

type Theme = "light" | "dark"

// Check system preference
const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

// Apply theme to documents
const applyTheme = (newTheme: Theme) => {
  if (newTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.removeAttribute("data-theme")
  }
}

// Initialise theme immediately
const savedTheme = localStorage.getItem("theme") as Theme | null
const initialTheme = savedTheme || getSystemTheme()
applyTheme(initialTheme)

const theme = ref<Theme>(initialTheme)

export function useTheme() {
  // Toggle between light and dark
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
  }

  // Watch for theme changes and persist
  watch(theme, (newTheme) => {
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  })

  return {
    theme,
    toggleTheme,
  }
}

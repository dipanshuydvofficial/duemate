"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "./icons"

type Theme = "dark" | "light"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem("duemate-theme") as Theme | null
    const initial: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    setTheme(initial)
    document.documentElement.dataset.theme = initial
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem("duemate-theme", next)
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title="Toggle theme"
    >
      {mounted && theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

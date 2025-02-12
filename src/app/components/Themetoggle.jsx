"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" /> 
  }

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Sun size={20} className="transition-transform duration-300 rotate-0 dark:-rotate-180" />
      ) : (
        <Moon size={20} className="transition-transform duration-300 rotate-0 dark:rotate-180" />
      )}
    </button>
  )
}


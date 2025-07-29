import React from 'react'

interface ThemeTogglerProps {
  toggle: () => void
}

/**
 * Button component to toggle theme.
 */
export function ThemeToggler({ toggle }: ThemeTogglerProps) {
  return <button onClick={toggle}>Toggle Theme</button>
}

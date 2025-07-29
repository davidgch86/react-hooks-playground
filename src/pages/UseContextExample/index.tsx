import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { ThemeToggler } from './ThemeToggler'
import { ThemedBox } from './ThemedBox'

export function UseContextExample() {
  // UseState to hold the current theme with toggle function
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Toggle theme between 'light' and 'dark'
  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    // Provide current theme value to context consumers
    <ThemeContext.Provider value={theme}>
      <div>
        <h2>useContext Example</h2>
        <p>Sharing theme state across components without props drilling.</p>
        {/* Button to toggle the theme */}
        <ThemeToggler toggle={toggleTheme} />
        {/* Box that consumes theme from context */}
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  )
}

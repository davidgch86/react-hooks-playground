import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

/**
 * Box component that consumes theme context to set styles.
 */
export function ThemedBox() {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        background: theme === 'light' ? '#eee' : '#555',
        borderRadius: '4px',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      Current theme from context: <strong>{theme}</strong>
    </div>
  )
}

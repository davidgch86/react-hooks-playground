// src/pages/CombinedHooksExample/index.tsx
import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '../CustomHookExample/useLocalStorage'

/**
 * Demonstrates combining useState, useEffect and custom useLocalStorage.
 */
export function CombinedHooksExample() {
  // Use our custom hook to persist a name
  const [name, setName] = useLocalStorage<string>('user-name', '')

  // Track window width using useState + useEffect (basic example)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <h1>Combined Hooks Example</h1>
      <p>
        This page demonstrates combining <code>useState</code>, <code>useEffect</code> and a
        custom <code>useLocalStorage</code> hook.
      </p>

      <label htmlFor="nameInput">Enter your name (saved to localStorage):</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        style={{ marginLeft: 10 }}
      />

      <p style={{ marginTop: 20 }}>
        Your window width is: <strong>{width}px</strong>
      </p>
    </div>
  )
}

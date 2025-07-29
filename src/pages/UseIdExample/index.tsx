// src/pages/UseIdExample/index.tsx
import React, { useId } from 'react'

/**
 * Demonstrates useId hook for generating stable unique IDs.
 */
export function UseIdExample() {
  const id = useId()

  return (
    <div>
      <h1>useId Example</h1>
      <p>
        The <code>useId</code> hook generates a unique ID stable across server
        and client renders. Useful for accessible form fields.
      </p>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" placeholder="Enter your name" />
    </div>
  )
}

import React, { useId } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * Demonstrates useId hook for generating stable unique IDs.
 */
export function UseIdExample() {
  const id = useId()

  return (
    <CodeExample code={code}>
      <h1>useId Example</h1>
      <p>
        The <code>useId</code> hook generates a unique ID stable across server
        and client renders. Useful for accessible form fields.
      </p>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" placeholder="Enter your name" />
    </CodeExample>
  )
}

`
/**
 * Demonstrates useId hook for generating stable unique IDs.
 */
export function UseIdExample() {
  const id = useId()

  return (
    <CodeExample code={code}>
      <h1>useId Example</h1>
      <p>
        The <code>useId</code> hook generates a unique ID stable across server
        and client renders. Useful for accessible form fields.
      </p>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" placeholder="Enter your name" />
    </CodeExample>
  )
}

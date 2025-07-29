import { useState } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
import React, { useState } from 'react'

/**
 * useState example demonstrating local component state management.
 */
export function UseStateExample() {
  // Define a local state variable "count" initialized to 0
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>useState Example</h2>
      <p>This example demonstrates how to use useState to manage local state.</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
`

/**
 * useState example demonstrating local component state management.
 */
export function UseStateExample() {
  // Define a local state variable "count" initialized to 0
  const [count, setCount] = useState(0)

  return (
   <CodeExample code={code}>
    <div>
      <h2>useState Example</h2>
      <p>This example demonstrates how to use useState to manage local state.</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </CodeExample>
  )
  
}

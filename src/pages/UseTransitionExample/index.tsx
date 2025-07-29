import React, { useState, useTransition } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * Demonstrates useTransition to mark non-urgent updates.
 */
export function UseTransitionExample() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState<string[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setInput(value)

    startTransition(() => {
      // Simulate adding many items filtered by input
      const newList = Array(10000)
        .fill(null)
        .map((_, i) => 'Item $ {i + 1}')
        .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setList(newList)
    })
  }

  return (
    <div>
      <h1>useTransition Example</h1>
      <p>
        The <code>useTransition</code> hook allows you to mark state updates as
        non-urgent, keeping UI responsive during expensive renders.
      </p>
      <input type="text" value={input} onChange={handleChange} placeholder="Filter items..." />
      {isPending && <p>Loading filtered list...</p>}
      <ul style={{ maxHeight: 200, overflowY: 'auto' }}>
        {list.slice(0, 100).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
`

/**
 * Demonstrates useTransition to mark non-urgent updates.
 */
export function UseTransitionExample() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState<string[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setInput(value)

    startTransition(() => {
      // Simulate adding many items filtered by input
      const newList = Array(10000)
        .fill(null)
        .map((_, i) => `Item ${i + 1}`)
        .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setList(newList)
    })
  }

  return (
    <CodeExample code={code}>
      <h1>useTransition Example</h1>
      <p>
        The <code>useTransition</code> hook allows you to mark state updates as
        non-urgent, keeping UI responsive during expensive renders.
      </p>
      <input type="text" value={input} onChange={handleChange} placeholder="Filter items..." />
      {isPending && <p>Loading filtered list...</p>}
      <ul style={{ maxHeight: 200, overflowY: 'auto' }}>
        {list.slice(0, 100).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </CodeExample>
  )
}

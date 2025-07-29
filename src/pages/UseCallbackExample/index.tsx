import { useState, useCallback } from 'react'
import { IncrementButton } from './IncrementButton'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * useCallback example memoizing functions to avoid recreations.
 */
export function UseCallbackExample() {
  const [count, setCount] = useState(0)

  /**
   * Memoize increment function, so its identity doesn't change on re-renders.
   */
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Memoizes callback functions to optimize child renders.</p>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />
    </div>
  )
}
`

/**
 * useCallback example memoizing functions to avoid recreations.
 */
export function UseCallbackExample() {
  const [count, setCount] = useState(0)

  /**
   * Memoize increment function, so its identity doesn't change on re-renders.
   */
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <CodeExample code={code}>
      <h2>useCallback Example</h2>
      <p>Memoizes callback functions to optimize child renders.</p>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />
    </CodeExample>
  )
}

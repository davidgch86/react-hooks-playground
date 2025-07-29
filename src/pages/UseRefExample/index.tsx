import { useRef } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * useRef example showing how to access DOM elements.
 */
export function UseRefExample() {
  // Create a ref for the input element
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Focus the input element using the ref.
   */
  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <div>
      <h2>useRef Example</h2>
      <p>Demonstrates using useRef to focus an input element.</p>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focusInput} style={{ marginLeft: '0.5rem' }}>
        Focus Input
      </button>
    </div>
  )
}
`

/**
 * useRef example showing how to access DOM elements.
 */
export function UseRefExample() {
  // Create a ref for the input element
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Focus the input element using the ref.
   */
  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <CodeExample code={code}>
      <h2>useRef Example</h2>
      <p>Demonstrates using useRef to focus an input element.</p>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focusInput} style={{ marginLeft: '0.5rem' }}>
        Focus Input
      </button>
    </CodeExample>
  )
}

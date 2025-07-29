import React, { useReducer } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * A simple counter reducer for demonstration purposes.
 */
type State = { count: number }
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

/**
 * Demonstrates useReducer hook as an alternative to useState
 * for more complex state logic.
 */
export function UseReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <CodeExample code={code}>
      <h1>useReducer Example</h1>
      <p>
        The <code>useReducer</code> hook manages state with a reducer function,
        making complex state logic easier to organize compared to multiple
        useState calls.
      </p>
      <p>Current count: <strong>{state.count}</strong></p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button onClick={() => dispatch({ type: 'decrement' })}>- Decrement</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </CodeExample>
  )
}
`

/**
 * A simple counter reducer for demonstration purposes.
 */
type State = { count: number }
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

/**
 * Demonstrates useReducer hook as an alternative to useState
 * for more complex state logic.
 */
export function UseReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <CodeExample code={code}>
      <h1>useReducer Example</h1>
      <p>
        The <code>useReducer</code> hook manages state with a reducer function,
        making complex state logic easier to organize compared to multiple
        useState calls.
      </p>
      <p>Current count: <strong>{state.count}</strong></p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button onClick={() => dispatch({ type: 'decrement' })}>- Decrement</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </CodeExample>
  )
}

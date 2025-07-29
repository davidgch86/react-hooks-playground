import React, { useState, useMemo } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
/**
 * Simulate an expensive calculation to demonstrate useMemo.
 * @param num Number input
 * @returns Number squared with some CPU-intensive loop
 */
function expensiveCalculation(num: number): number {
  console.log('Calculating...')
  let result = 0
  for (let i = 0; i < 1e8; i++) {
    result += i
  }
  return num * num + result * 0 // This adds CPU load without changing the result
}

/**
 * Demonstrates useMemo hook to memoize expensive calculations
 * and avoid recalculating on every render unless dependencies change.
 */
export function UseMemoExample() {
  const [number, setNumber] = useState(0)
  const [inputValue, setInputValue] = useState('0')
  const [isCalculating, setIsCalculating] = useState(false)

  // useMemo caches the result of expensiveCalculation until 'number' changes
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number)
  }, [number])

  function handleClick() {
    setIsCalculating(true)
    const num = Number(inputValue)
    if (isNaN(num)) {
      alert('Please enter a valid number')
      setIsCalculating(false)
      return
    }
    // Simulate async calculation delay to show loading state
    setTimeout(() => {
      setNumber(num)
      setIsCalculating(false)
    }, 1000)
  }

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>
        The <code>useMemo</code> hook memoizes the result of an expensive
        calculation — it will only recompute when its dependency changes (in
        this case, the input number). This avoids slowing down renders when the
        calculation is costly.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isCalculating}
        aria-label="Number input"
        style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}
      />
      <button onClick={handleClick} disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </button>
      <p>
        Result: <strong>{memoizedValue}</strong>
      </p>
    </div>
  )
}

`

/**
 * Simulate an expensive calculation to demonstrate useMemo.
 * @param num Number input
 * @returns Number squared with some CPU-intensive loop
 */
function expensiveCalculation(num: number): number {
  console.log('Calculating...')
  let result = 0
  for (let i = 0; i < 1e8; i++) {
    result += i
  }
  return num * num + result * 0 // This adds CPU load without changing the result
}

/**
 * Demonstrates useMemo hook to memoize expensive calculations
 * and avoid recalculating on every render unless dependencies change.
 */
export function UseMemoExample() {
  const [number, setNumber] = useState(0)
  const [inputValue, setInputValue] = useState('0')
  const [isCalculating, setIsCalculating] = useState(false)

  // useMemo caches the result of expensiveCalculation until 'number' changes
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number)
  }, [number])

  function handleClick() {
    setIsCalculating(true)
    const num = Number(inputValue)
    if (isNaN(num)) {
      alert('Please enter a valid number')
      setIsCalculating(false)
      return
    }
    // Simulate async calculation delay to show loading state
    setTimeout(() => {
      setNumber(num)
      setIsCalculating(false)
    }, 1000)
  }

  return (
    <CodeExample code={code}>
      <h1>useMemo Example</h1>
      <p>
        The <code>useMemo</code> hook memoizes the result of an expensive
        calculation — it will only recompute when its dependency changes (in
        this case, the input number). This avoids slowing down renders when the
        calculation is costly.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isCalculating}
        aria-label="Number input"
        style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}
      />
      <button onClick={handleClick} disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </button>
      <p>
        Result: <strong>{memoizedValue}</strong>
      </p>
    </CodeExample>
  )
}

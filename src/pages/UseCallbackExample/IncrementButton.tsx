import React from 'react'

interface IncrementButtonProps {
  onIncrement: () => void
}

/**
 * Memoized button component to avoid unnecessary re-renders.
 */
export const IncrementButton = React.memo(function IncrementButton({ onIncrement }: IncrementButtonProps) {
  console.log('IncrementButton rendered')
  return <button onClick={onIncrement}>Increment</button>
})

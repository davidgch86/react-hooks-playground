// src/pages/UseLayoutEffectExample/index.tsx
import React, { useLayoutEffect, useRef, useState } from 'react'

/**
 * Demonstrates useLayoutEffect to measure an element size before paint.
 */
export function UseLayoutEffectExample() {
  const boxRef = useRef<HTMLDivElement>(null)
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect()
      setBoxSize({ width, height })
    }
  }, [])

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <p>
        <code>useLayoutEffect</code> runs synchronously after all DOM mutations
        but before the browser paints, useful for reading layout and synchronously
        re-rendering.
      </p>
      <div
        ref={boxRef}
        style={{ width: '200px', height: '150px', backgroundColor: '#4f46e5', margin: '1rem 0' }}
      />
      <p>Box size: {boxSize.width.toFixed(0)}px wide by {boxSize.height.toFixed(0)}px high</p>
    </div>
  )
}

import { useState, useEffect } from 'react'

/**
 * useEffect example demonstrating side effects such as event listeners.
 */
export function UseEffectExample() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Handler to update width state on resize
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    // Attach event listener
    window.addEventListener('resize', handleResize)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty deps: run once on mount

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Tracks the window width and updates on resize.</p>
      <p>Current window width: {windowWidth}px</p>
    </div>
  )
}

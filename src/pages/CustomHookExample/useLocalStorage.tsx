// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

/**
 * Custom hook to synchronize state with localStorage.
 * @param key - localStorage key
 * @param initialValue - initial state value
 * @returns [state, setState]
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Get initial state from localStorage or fallback to initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Write to localStorage whenever state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.warn(`Error writing localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

import { createContext } from 'react'

// Export ThemeContext alone from aquí
export const ThemeContext = createContext<'light' | 'dark'>('light')

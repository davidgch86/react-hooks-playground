import React, { useState } from 'react'

import { UseStateExample } from './pages/UseStateExample'
import { UseEffectExample } from './pages/UseEffectExample'
import { UseContextExample } from './pages/UseContextExample'
import { UseRefExample } from './pages/UseRefExample'
import { UseCallbackExample } from './pages/UseCallbackExample'
import { UseMemoExample } from './pages/UseMemoExample'
import { UseReducerExample } from './pages/UseReducerExample'
import { UseLayoutEffectExample } from './pages/UseLayoutEffectExample'
import { UseImperativeHandleExample } from './pages/UseImperativeHandleExample'
import { UseIdExample } from './pages/UseIdExample'
import { UseTransitionExample } from './pages/UseTransitionExample'
import { CombinedHooksExample } from './pages/CombinedHooksExample'

type Page =
  | 'useState'
  | 'useEffect'
  | 'useContext'
  | 'useRef'
  | 'useCallback'
  | 'useMemo'
  | 'useReducer'
  | 'useLayoutEffect'
  | 'useImperativeHandle'
  | 'useId'
  | 'useTransition'
  | 'combinedHooks'

export function App() {
  const [page, setPage] = useState<Page>('useState')

  function renderPage() {
    switch (page) {
      case 'useState':
        return <UseStateExample />
      case 'useEffect':
        return <UseEffectExample />
      case 'useContext':
        return <UseContextExample />
      case 'useRef':
        return <UseRefExample />
      case 'useCallback':
        return <UseCallbackExample />
      case 'useMemo':
        return <UseMemoExample />
      case 'useReducer':
        return <UseReducerExample />
      case 'useLayoutEffect':
        return <UseLayoutEffectExample />
      case 'useImperativeHandle':
        return <UseImperativeHandleExample />
      case 'useId':
        return <UseIdExample />
      case 'useTransition':
        return <UseTransitionExample />
      case 'combinedHooks':
        return <CombinedHooksExample />
      default:
        return <UseStateExample />
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => setPage('useState')}>useState</button>
        <button onClick={() => setPage('useEffect')}>useEffect</button>
        <button onClick={() => setPage('useContext')}>useContext</button>
        <button onClick={() => setPage('useRef')}>useRef</button>
        <button onClick={() => setPage('useCallback')}>useCallback</button>
        <button onClick={() => setPage('useMemo')}>useMemo</button>
        <button onClick={() => setPage('useReducer')}>useReducer</button>
        <button onClick={() => setPage('useLayoutEffect')}>useLayoutEffect</button>
        <button onClick={() => setPage('useImperativeHandle')}>useImperativeHandle</button>
        <button onClick={() => setPage('useId')}>useId</button>
        <button onClick={() => setPage('useTransition')}>useTransition</button>
        <button onClick={() => setPage('combinedHooks')}>Combined Hooks</button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  )
}

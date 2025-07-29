import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import { CodeExample } from '../../components/CodeExample'

// The source code as a string, to display alongside the demo
const code = `
// Define interface for the methods the child exposes
interface CustomInputHandle {
  focus: () => void
}

const CustomInput = forwardRef<CustomInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose 'focus' method to parent via ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    }
  }))

  return <input ref={inputRef} type="text" placeholder="Type something..." />
})

export function UseImperativeHandleExample() {
  // Use the correct type here
  const inputRef = useRef<CustomInputHandle>(null)
  const [message, setMessage] = useState('')

  return (
    <CodeExample code={code}>
      <h1>useImperativeHandle Example</h1>
      <p>
        The <code>useImperativeHandle</code> hook lets a child component expose
        imperative methods to its parent via ref.
      </p>
      <CustomInput ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current?.focus()
          setMessage('Input focused!')
        }}
        style={{ marginLeft: 10 }}
      >
        Focus Input
      </button>
      {message && <p>{message}</p>}
    </CodeExample>
  )
}
`
// Define interface for the methods the child exposes
interface CustomInputHandle {
  focus: () => void
}

const CustomInput = forwardRef<CustomInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose 'focus' method to parent via ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    }
  }))

  return <input ref={inputRef} type="text" placeholder="Type something..." />
})

export function UseImperativeHandleExample() {
  // Use the correct type here
  const inputRef = useRef<CustomInputHandle>(null)
  const [message, setMessage] = useState('')

  return (
    <CodeExample code={code}>
      <h1>useImperativeHandle Example</h1>
      <p>
        The <code>useImperativeHandle</code> hook lets a child component expose
        imperative methods to its parent via ref.
      </p>
      <CustomInput ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current?.focus()
          setMessage('Input focused!')
        }}
        style={{ marginLeft: 10 }}
      >
        Focus Input
      </button>
      {message && <p>{message}</p>}
    </CodeExample>
  )
}

import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


interface CodeExampleProps {
  code: string
  children: React.ReactNode
}

/**
 * Component to display a demo (children) side-by-side with
 * syntax-highlighted code snippet.
 */
export function CodeExample({ code, children }: CodeExampleProps) {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 300 }}>
        {/* Demo rendered here */}
        {children}
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 300,
          backgroundColor: '#282c34',
          borderRadius: 8,
          padding: 16,
          overflowX: 'auto',
          color: '#fff',
          fontSize: 14,
          fontFamily: 'Consolas, monospace',
          boxShadow: '0 0 8px rgba(0,0,0,0.5)',
        }}
      >
        {/* Syntax highlighted code */}
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLines>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

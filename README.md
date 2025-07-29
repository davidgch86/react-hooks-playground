
# React Hooks Playground

This project is an educational React + TypeScript + Vite playground that demonstrates the most commonly used React Hooks, including:

- Built-in React Hooks (basic to advanced)
- Custom reusable Hooks (like `useLocalStorage`, `useToggle`, `useWindowSize`, etc.)
- Combined hook usage in real scenarios
- Side-by-side live demos with syntax-highlighted source code

This project is ideal for learning and serving as a reference for real-world usage.

---

## Tech Stack

- React 18+
- TypeScript
- Vite
- React Router (optional for route-based navigation)
- Custom styling (vanilla CSS)
- `react-syntax-highlighter` for in-browser code preview
- ESLint with type-aware configuration

---

## Folder Structure


src/

│

├── components/           # Shared components (e.g. CodeExample)

├── hooks/                # Custom hooks (e.g. useLocalStorage.ts)

├── pages/                # One file per hook example

│   ├── UseStateExample/

│   ├── UseEffectExample/

│   ├── UseContextExample/

│   ├── UseRefExample/

│   ├── UseMemoExample/

│   ├── UseCallbackExample/

│   ├── UseReducerExample/

│   ├── UseLayoutEffectExample/

│   ├── UseImperativeHandleExample/

│   ├── UseTransitionExample/

│   ├── UseIdExample/

│   ├── CombinedHooksExample/

│   └── CustomHookExample/

│

├── App.tsx               # Main navigation menu

├── main.tsx              # Vite entry point

├── index.css             # Global styles

└── ...


---
## Getting Started

To run the project locally:

```bash
npm install
npm run dev
---

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
    <button className="btn btn-secondary">Secondary</button>
    </>
  )
}

export default App

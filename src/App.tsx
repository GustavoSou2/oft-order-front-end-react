import { useState } from 'react'
import { AppRouting } from './App.routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRouting />
  )
}

export default App

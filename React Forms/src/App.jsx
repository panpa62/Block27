import { useState } from 'react'
import Authenticate  from './components/Authenticate'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate />
    </>
  )
}

export default App

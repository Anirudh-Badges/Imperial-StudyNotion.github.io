import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl font-medium text-red-500'>This is Home page</h1>
     <h2 className='text-2xl font-bold'>Hello!  world</h2>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Hi! How are you?</h1>} />
      <Route path='/new' element={<h1>Hey React!</h1>} />
    </Routes>
    </>
  )
}

export default App

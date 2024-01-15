import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Hi! How are you?</h1>} />
      <Route path='/new' element={<h1>Hey React!</h1>} />
      <Route path='*' element={<Navigate to="/"/>} />
      <Route path='/:id'>
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
    </Routes>
    </>
  )
}

export default App

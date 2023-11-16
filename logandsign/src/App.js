import React from 'react'
import Login from './login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import Home from './HOMEPAGE/Home'
import Create from './Create'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
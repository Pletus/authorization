import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center bg-white m-72 mx-96'>
      
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

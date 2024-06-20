import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <div className='bg-slate-500 m-20 mx-96 opacity-60 rounded-lg'>
      
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

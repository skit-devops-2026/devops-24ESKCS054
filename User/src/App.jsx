import { useState } from 'react'
import './App.css'
import MainRouter from './components/MainRouter'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 

  return (
    <>
    <MainRouter/>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router ,Routes ,Route ,Navigate } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import ProtectedRoute from "./ProtectedRoute";

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

import ServiceDetails from "../pages/ServiceDetails";
import ServiceList from "../pages/ServiceList";


const MainRouter = () => {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/Header' element={<Header/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/Main' element={<ProtectedRoute> <Main /></ProtectedRoute> }/>
         <Route path="/" element={<Navigate to="/Login" />} />
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path="/Login" element={<Login />} />

          <Route path="/services/:slug" element={<ServiceDetails />} /> 
          <Route     path="/service-detail/:detailSlug"
          element={<ServiceList />}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default MainRouter


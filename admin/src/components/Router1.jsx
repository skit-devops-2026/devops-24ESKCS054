import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import Category from '../pages/Category'
import Services from '../pages/Services'
import ServiceCategory from '../pages/ServiceCategory'

const Router1 = () => {
  return (
    <div>
      <Router>
        <Routes>
            
            //Admin Panel
            <Route path='/' element={<Login/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path='/Category' element={<Category/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/ServiceCategory' element={<ServiceCategory/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Router1

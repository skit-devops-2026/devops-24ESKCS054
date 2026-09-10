import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
import { IoSearch ,IoChevronDown} from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {

     const myStyle = {
       height: "24px",
       width: "24px"
  }; 

  return (
    
       <header className="headerwrapper shadow-lg position-sticky top-0 z-2">
      <div className="container-fluid maincontainer pt-1">
        <div className="container">
            <div className="row">
               <div className="col-6">
                    <div className="offertext">
                        End the year strong!<span className='off'>Get 25% SITEWIDE with code NEWME</span>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-end  ">
                    <div className="headerdropdown d-flex gap-3">
                        <div>
                                <select className="border border-0 bg-transparent">
                                   <option value="English" >English</option>
                                   <option value="hindi" >hindi</option>
                                    <option value="germany" >germany</option>
                                 </select>
                        </div>   
                        <div>     
                                  <select className="border border-0 bg-transparent">
                                   <option value="jaipur" >jaipur</option>
                                   <option value="kota" >kota</option>
                                    <option value="ajmer" >ajmer</option>
                                 </select>
                        </div>          
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div className="secondcotaianer  d-flex justify-content-between">
          <div className="container">
            <div className="row card-login align-items-center pt-4 rounded-start-2 ">
                <div className="col-lg-2">
                    <img src="/health-serve-logo.png" className="img-fluid"  height="60px" width="130px" alt=""/>
                </div>
                <div className=" col-lg-8 ">
                    <div className='search-bar'><IoSearch size={22} color="#6E491C" className="search-icon" /><input className="search" type="text" placeholder="Search for therapy ,Nurse care"/>
                    </div>
                    <div className="material-symbols-outlined search-icon" style={myStyle}>
                    </div>
                </div>
                         <div className="icon col-lg-2 d-flex justify-content-end align-items-center gap-4">
                            <div className="icon-box">
                               <FiShoppingCart size={22} />
                            </div>
                           <div className="icon-box">
                               <FiUser size={22} />
                            </div>
                        </div>
                      </div>
                </div>
            </div>

           <div className="thirdcontainer py-2">
  <div className="container">

    {/* Mobile Menu Button */}
    <div className="d-lg-none text-end">
      <button
        className="btn border-0 shadow-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
      >
        <HiOutlineMenuAlt3 size={30} color="#6E491C" />
      </button>
    </div>

    {/* Desktop Menu */}
    <div className="dropdown d-none d-lg-flex justify-content-between">

      <div className="menu">
  <Link to="/services/doctor-visit" className="service">
    Doctor Visit <IoChevronDown />
  </Link>
</div>

<div className="menu">
  <Link to="/services/iv-therapy" className="service">
    IV Therapy <IoChevronDown />
  </Link>
</div>

<div className="menu">
  <Link to="/services/physiotherapy" className="service">
    Physiotherapy <IoChevronDown />
  </Link>
</div>

<div className="menu">
  <Link to="/services/care" className="service">
    Care <IoChevronDown />
  </Link>
</div>

<div className="menu">
  <Link to="/services/health-program" className="service">
    Health Programs <IoChevronDown />
  </Link>
</div>

<div className="menu">
  <Link to="/services/other" className="service">
    Others
  </Link>
</div>

    </div>

  </div>
</div>
<div className="offcanvas offcanvas-start" tabIndex="-1"id="mobileMenu">
  <div className="offcanvas-header">
    <h5>Services</h5>

    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
    ></button>
  </div>

  <div className="offcanvas-body">

    <Link className="mobile-link" to="/services/doctor-visit">
  Doctor Visit
</Link>

<Link className="mobile-link" to="/services/iv-therapy">
  IV Therapy
</Link>

<Link className="mobile-link" to="/services/physiotherapy">
  Physiotherapy
</Link>

<Link className="mobile-link" to="/services/care">
  Care
</Link>

<Link className="mobile-link" to="/services/health-program">
  Health Programs
</Link>

<Link className="mobile-link" to="/services/other">
  Others
</Link>
  </div>
</div>
        </header>
    
   
  )
}

export default Header

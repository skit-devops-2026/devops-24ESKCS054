import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "../App.css"

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

const Main = () => {
  return (
    <div>
      <Header/>
      <main className="position-relative mt-1">
        
        <div> 
            <img src="public/Senior-woman.png" height="658px" className="img-fluid" alt="..."/>
        </div>

        <div className="content">
            <div className="text">
                <h1 className="fw-normal">Your All-in-One Platform</h1>
                <h1 className="fw-normal">for Booking</h1>
                <h1 className="fw-bold">Home Healthcare Servicez.</h1>
                <p className="mt-3 fs-5">Delivered Right to doorstep.</p>
            </div>
        </div>

        <div className="chat-box-icons ">
            <div className="chat-box whatsapp-box">
                <FaWhatsapp size={28} color="white" />  
            </div>
            <div className="chat-box call-box" >
                 <IoCall size={24} color="white" /> 
            </div>
            <div className="chat-box message-box">
                 <MdMessage size={24} color="white" />   
            </div>
        </div>    
    </main>
<div className="card-container">
 <div className="text-center p-3">
    <p className="fw-bold ">Top Services</p>
    <p style={{color:"#263238"}}>Caring for You ,Every Step of the Way.</p>
 </div>
      
<div className="container container-fluid">
    <div className="d-flex justify-content-between">
        <p style={{color:"#6E491C"}}>Lab Tests At Home</p>
        <p ><a className="link-offset-2 link-underline-secondary link-underline-opacity-25" href="#" style={{color:"#6E491C"}}>See All</a></p>
    </div>
    
<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

</div>
</div>

<div className="container container-fluid pt-3">
    <div className="d-flex justify-content-between">
        <p style={{color:"#6E491C"}}>At Home IV Therapy</p>
        <p ><a className="link-offset-2 link-underline-secondary link-underline-opacity-25" href="#" style={{color:"#6E491C"}}>See All</a></p>
    </div>
<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

</div>
</div>

 <div className="container container-fluid pt-3">
    <div className="d-flex justify-content-between">
        <p style={{color:"#6E491C"}}>Nurse Care</p>
        <p ><a className="link-offset-2 link-underline-secondary link-underline-opacity-25" href="#" style={{color:"#6E491C"}}>See All</a></p>
    </div>
<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="  service-card p-1">
      <img src="/semple.png" className="card-img-top rounded-circle p-2" alt="..."/>
      <div className="card-body text-center ">
        <h5 className="card-title">Blood Testing</h5>
        <p className="card-text">AED 600</p>
        <input type="button" className="btn w-100" value="read more" style={{ backgroundColor: "#6E491C",
              color: "#FFFFFF",borderRadius: "25px" }}/>
      </div>
    </div>
  </div>

</div>
</div>
</div>

  <Footer/>
    </div>

  )
}

export default Main

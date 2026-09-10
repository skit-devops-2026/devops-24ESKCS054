import React from 'react'
import { useState } from "react";
import API from "../api/categoryApi";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faImage, faMoneyBill1Wave, faNewspaper, faPhone, faProcedures, faStar, faStreetView, faTableCells, faUpDown, faUserNurse, faUsersViewfinder ,faUserGear ,faGear, faUser, faLocationDot ,faRightToBracket} from '@fortawesome/free-solid-svg-icons'

const Category = () => {

const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [image,setImage]=useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const formData=new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("image",image);

        const response=await API.post(
            "/category/create",formData
        );

        alert(response.data.message);

        setName("");
        setDescription("");
        setImage(null);
    }

    catch(error){
        console.log(error);
        alert("Something Went Wrong");
    }
}

  return (
    <div className='admin min-vh-100 conatainer-fluid '>
       <div className="container  float-start">
        <div className='row '>
          <div className="col navbar d-flex  justify-content-start ">  
            <div>
                <div className='mt-4 '><img src="public/health-serve-logo.png" className="img-fluid ms-4"  height="60px" width="130px" alt=""/>
                <h3 className='d-flex justify-content-center text-white'>FD</h3>
              </div>
                <form >
                    <div className=''>
                     
                     <div className="dropdown">
                        <button className="btn text-white dropdown-toggle me-5 " type="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon className='me-3' icon={faTableCells} />Category
                        </button>
                        <ul className="dropdown-menu shadow-lg">
                          <li> <Link to={"/Admin"} className="btn text-white "><FontAwesomeIcon className='me-2' icon={faTableCells} />Category</Link></li>
                          <li> <a href="#" className="btn text-white "><FontAwesomeIcon className='me-2' icon={faRightToBracket} />Sub Category</a></li>
                        </ul>
                     </div>
                    <div>
                        <Link to={"/Services"} className="btn text-white"><FontAwesomeIcon className='me-2' icon={faLocationDot} />Services</Link>
                    </div>
                    <div>
                        <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faUserGear} />Admin Roles</a>
                    </div>
                    <div>
                        <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faGear} />Service Managment</a>
                    </div>
                    <div>
                        <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faGear} />Sercive Allocation</a>
                    </div>
                    <div>
                        <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faUser} />Registered Users</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faNewspaper} />Booking</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faMoneyBill1Wave} />Collected Cash</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faProcedures} />Providers</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faUserNurse} />Practitioners</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faStar} />Manage Reviews</a>
                    </div>
                    <div>
                       <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faPhone} />Manage Earnings</a>
                    </div>
                    </div>
                </form>
            </div>
          </div>
          <div className='col-9 category m-3 rounded-4'>
            <div className="header p-2  ">
                <nav className="p-2 bg-body-tertiary rounded-pill shadow ">
                  <div className="container-fluid d-flex justify-content-between">
                     <a className="navbar-brand mt-1 fw-semibold">Category</a>
                      <form className="d-flex justity-content-bteween">
                           <button className="btn btn-outline-info me-4" type="submit">English</button>
                           <div><FontAwesomeIcon   className='me-2 mt-2' icon={faBell} /></div>
                           <div>
                              <a href="#" className="btn ">Admin<FontAwesomeIcon className='me-2' icon={faAngleDown} /></a>
                          </div>
                      </form>
                   </div>
                </nav>
            </div>

           {/* Category create */}
           <div className='dataBase bg-white rounded-2 p-2 mt-2 mx-2 shadow'>
            <div>
               <h3>Category Create</h3>
            </div>
            <hr />
            <div>
               <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-3 d-flex justify-content">
                     <label for="email" className="form-label">Name</label>
                     <input type="text"   className="form-control ms-5"
                      value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
                  </div>
                   <div className="mb-3 mt-3 d-flex justify-content">
                     <label for="email" className="form-label">Image</label>
                     <FontAwesomeIcon  className='mt-2' icon={faImage} />
                     <input type="file" className="form-control ms-4" onChange={(e)=>setImage(e.target.files[0])}/>
                  </div>
                  <div className="mb-3 mt-3 d-flex justify-content">
                     <label for="comment">Description</label>
                     <textarea className="form-control ms-4" rows="5" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                  </div>
                  <div className='d-flex justify-content-between'>
                     <Link to={"/Admin"} className='btn btn-danger'>Back</Link>
                     <button type='submit' className='btn btn-success '>Save & Publish</button>
                  </div>
               </form>
            </div>
           </div>

          </div>
          </div>
       </div>
    </div>
  )
}

export default Category


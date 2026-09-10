import React, { useState } from "react";
import API from "../api/serviceApi";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faImage, faMoneyBill1Wave, faNewspaper, faPhone, faProcedures, faStar, faStreetView, faTableCells, faUpDown, faUserNurse, faUsersViewfinder ,faUserGear ,faGear, faUser, faLocationDot ,faRightToBracket} from '@fortawesome/free-solid-svg-icons'

const ServiceCategory = () => {
const [name, setName] = useState("");
const [service, setService] = useState("");
const [ageGroup, setAgeGroup] = useState("");
const [gender, setGender] = useState("");
const [vital, setVital] = useState("");
const [preventiveWellness, setPreventiveWellness] = useState("");
const [image, setImage] = useState(null);
const [shortDescription, setShortDescription] = useState("");
const [longDescription, setLongDescription] = useState("")
const [mrp, setMrp] = useState("");
const [sellingPrice, setSellingPrice] = useState("");
const [status, setStatus] = useState(true);

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        
        formData.append("name", name);
        formData.append("service", service);
        formData.append("ageGroup", ageGroup);
        formData.append("gender", gender);
        formData.append("vital", vital);
        formData.append("preventiveWellness", preventiveWellness);
        formData.append("image", image);
        formData.append("shortDescription", shortDescription);
        formData.append("longDescription", longDescription);
        formData.append("mrp", mrp);
        formData.append("sellingPrice", sellingPrice);
        formData.append("status", status);

        console.log(image);
        console.log(formData.get("image"));

        const response = await API.post(
            "/service/create",
            formData
        );
        alert(response.data.message);
    }
    catch (error) {
        console.log("Full Error:", error);

    console.log("Response:", error.response);

    console.log("Data:", error.response?.data);

    alert(error.response?.data?.message || error.message);
    }
};

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
                        <a href="#" className="btn text-white"><FontAwesomeIcon className='me-2' icon={faLocationDot} />Services</a>
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
                     <a className="navbar-brand mt-1 fw-semibold">Services</a>
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

           {/*Services Category create */}
           <div className='dataBase bg-white rounded-2 p-2 mt-2 mx-2 shadow table-scroll'>
            <div>
               <h3>Services Category</h3>
            </div>
            <hr />
            <div>
               <form onSubmit={handleSubmit}>
                  <div  className="mb-3 mt-3 d-flex justify-content">
                     <h6 className="form-label mt-2">Name:</h6>
                     <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                 <div className="mb-3 mt-3 d-flex justify-content">
                  <h6 className="form-label mt-2">Service:</h6>
                  <select className="form-select" value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="">Select Service Name</option>
                    <option value="Doctor Visit">Doctor Visit</option>
                    <option  value="Physiotherapy">Physiotherapy</option>
                    <option value="IV Therapy">IV Therapy</option>
                    <option value="Leb Tests">Leb Tests</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Others">Others</option>
                    
                 </select>
                 </div>

                 <div className="mb-3 mt-3 d-flex justify-content">
                    <h6 className="form-label mt-2">Age:</h6>
                 <select className="form-select mt-2" value={ageGroup} onChange={(e)=>setAgeGroup(e.target.value)}>
                    <option value="">Age Group</option>
                    <option value="All">all</option>
                    <option  value="Greater than 18"> greater then 18</option>
                    <option value="18-40">18-40</option>
                    <option value="41-65">41-65</option>
                    <option value="Above 65 Years">Above 65 years</option>
                 </select>
                 </div>
                <div className='d-flex gap-3 mt-2'>
                   <h6>Select gender:</h6> 
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="Male"  checked={gender==="Male"} onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label" for="radioDefault1">
                     male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="Female" checked={gender==="Female"} onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label" for="radioDefault2">
                     female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="Both" checked={gender==="Both"} onChange={(e)=>setGender(e.target.value)}/>
                    <label className="form-check-label" for="radioDefault3">
                    both
                   </label>
                </div>
                </div> 
                <div className="mb-3 mt-3 d-flex justify-content">
                    <h6 className="form-label mt-2">Vital:</h6>
                 <select className="form-select mt-2" onChange={(e)=>setVital(e.target.value)}>
                    <option value="">Vital Systems</option>
                    <option value="Heart Health">Heart Health</option>
                    <option value="Hormonal Health">Hormonal Health</option>
                    <option value="Kidney Health">Kidney Health</option>
                    <option value="Liver Health">Liver Health</option>
                    <option value="Gut Health">Gut Health</option>
                    <option value="Reproductive Health">Reproductive Health</option>
                    <option value="Lungs Health">Lungs Health</option>
                    <option value="Bone and Muscle Heal">Bone and Muscle Heal</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Skin & Hair Health">Skin & Hair Health</option>
                 </select>
                 </div>
                 <div className="mb-3 mt-3 d-flex justify-content">
                    <h6 className="form-label mt-2">Preventive wellness:</h6>
                 <select className="form-select mt-2" value={preventiveWellness} onChange={(e)=>setPreventiveWellness(e.target.value)}>
                    <option value="">Preventive & wellness</option>
                    <option value="Weight Management">Weight Management</option>
                    <option value="Allergy & Intolerance"> Allergy & Intolerance</option>
                    <option value="Longevity">Longevity</option>
                    <option value="Cancer  Risk Screening">Cancer Risk Screening</option>
                    <option value="Genetic">Genetic</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Anti-Aging & Longevity">Anti-Aging & Longevity"</option>
                 </select>
                 </div>
                <div className="mb-3 mt-3 d-flex justify-content">
                    <label for="email" className="form-label">Image</label>
                    <FontAwesomeIcon  className='mt-2' icon={faImage} />
                    <input type="file" className="form-control ms-4" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                 <div className="mb-3">
                    <label className="form-label">Short Description</label>
                    <textarea className="form-control"  rows="3"  placeholder="Enter short description" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)}
                    ></textarea>
                 </div>
                 <div className="mb-3">
                    <label className="form-label">Long Description</label>
                     <textarea className="form-control"  rows="6" value={longDescription}
                     placeholder="Enter long description" onChange={(e)=>setLongDescription(e.target.value)}></textarea>
                  </div>
                <div className="row">
                  <div className="col">
                    <label className="form-label">MRP</label>
                    <input type="text" className="form-control" placeholder="Mrp"value={mrp} onChange={(e)=>setMrp(e.target.value)}/>
                  </div>
                  <div className="col">
                    <label className="form-label">Selling Price</label>
                    <input type="text" className="form-control" placeholder="Selling Price" value={sellingPrice} onChange={(e)=>setSellingPrice(e.target.value)}/>
                  </div>
                </div>
                <div className='mt-2'>
                    <div>Status :</div>
                    <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="statusSwitch" checked={status}
                         onChange={(e) => setStatus(e.target.checked)}/>
                    <label className="form-check-label" htmlFor="statusSwitch">
                       {status ? "Active" : "Inactive"}
                    </label>
                </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between mt-4'>
                     <Link to={"/Services"} className='btn btn-danger'>Back</Link>
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

export default ServiceCategory


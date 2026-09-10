import React, { useEffect, useState } from "react";
import API from "../api/serviceApi";
import {Link} from 'react-router-dom'
import "./Admin.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faImage, faMoneyBill1Wave, faNewspaper, faPhone, faProcedures, faStar, faStreetView, faTableCells, faUpDown, faUserNurse, faUsersViewfinder ,faUserGear ,faGear, faUser, faLocationDot ,faRightToBracket} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
 
   const [services, setServices] = useState([]);
   const [viewService, setViewService] = useState({});
   const [editService, setEditService] = useState({});
   const [editImage, setEditImage] = useState(null);

   const getServices = async () => {
     try {
     const response = await API.get("/service/all");
     console.log(response.data);
     setServices(response.data.data);
  } 
  catch (error) {
   console.log(error);
  }
};

//view method
const handleView = async (id) => {
    try {
        const response = await API.get(`/service/${id}`);
        console.log(response.data);
        setViewService(response.data.data);
    }
    catch (error) {
      console.log(error);
    }
}

//handleEdit Function
const handleEdit = async (id) => {

    try {
        const response = await API.get(`/service/${id}`);
        console.log(response.data);
        setEditService(response.data.data);
    }
    catch (error) {
        console.log(error);
    }
}

//handleChange Function
const handleChange = (e) => {

    const { name, value } = e.target;

    setEditService({

        ...editService,

        [name]: value

    });

};

const updateService = async () => {

    try {
        const formData = new FormData();
        
        formData.append("name", editService.name);
        formData.append("service", editService.service);
        formData.append("ageGroup", editService.ageGroup);
        formData.append("gender", editService.gender);
        formData.append("vital", editService.vital);
        formData.append("preventiveWellness", editService.preventiveWellness);
        formData.append("shortDescription", editService.shortDescription);
        formData.append("longDescription", editService.longDescription);
        formData.append("mrp", editService.mrp);
        formData.append("sellingPrice", editService.sellingPrice);
        formData.append("status", editService.status);

        if (editImage) {
            formData.append("image", editImage);
        }
        const response = await API.put(
            `/service/update/${editService._id}`,
            formData
        );

        alert(response.data.message);
        getServices();
        document.getElementById("editClose").click();
    }
    catch (error) {
        console.log(error);
    }
};

//delete method
const deleteService = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this Service?"
    );

    if (!confirmDelete) return;

    try {
        const response = await API.delete(
            `/service/delete/${id}`
        );
        alert(response.data.message);
        getServices();
    }
    catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getServices();
}, []);

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

           {/* Service Category  */}
            <div className='dataBase bg-white rounded-2 p-2 mx-2 shadow'>
                           
                               <form className='d-flex justify-content-between'>
                                   <input className='border border-secondary-subtle rounded-2' type="text" placeholder='Search'/>
                                  
                                   <button className="btn btn-success " type="submit" ><Link to="/ServiceCategory" className=' text-decoration-none text-white ' >Create New Service</Link></button> 
                               </form>
                               <hr/>
                               <form className='d-flex justify-content-between'>
                                  <button className='btn btn-outline-secondary'>Status Filter</button> 
                                   <input type="date" className='border border-light-subtle'/>
                                   <input type="date" className='border border-light-subtle' />
                                   <button className='btn btn-info'>Clear Filter</button>
                               </form>
                               <div className="table-responsive">
                               <table className="table table-bordered mt-2">
                                  <thead>
                                      <tr>
                                        <th scope="col">S.No.</th>
                                         <th scope="col">Service ID</th>
                                         <th scope="col">Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Age group</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Vital</th>
                                        <th scope="col">Preventive Wellness</th>
                                        <th scope="col">Category Image</th>
                                         <th scope="col">Short Description</th>
                                         <th scope="col">Long Description</th>
                                         <th scope="col">Service MRP</th>
                                         <th scope="col">Service selling price</th>
                                         <th scope="col">Status</th>
                                         <th scope="col">Action</th>
                                      </tr>
                                   </thead>
                                   <tbody>
                                       {services.map((item,index)=>(
                                          <tr key={item._id}>
                                          <td>{index+1}</td>
                                          <td>{item._id}</td>
                                          <td>{item.name}</td>
                                          <td>{item.service}</td>
                                          <td>{item.ageGroup}</td>
                                          <td>{item.gender}</td>
                                          <td>{item.vital}</td>
                                          <td>{item.preventiveWellness}</td>
                                          <td><img src={`http://localhost:3000/uploads/${item.image}`} width="70" height="70"
                                          alt={item.service}/>
                                          </td>
                                          <td>{item.shortDescription}</td>
                                          <td>{item.longDescription}</td>
                                          <td>{item.mrp}</td>
                                          <td>{item.sellingPrice}</td>
                                          <td>{item.status ? "Active" : "Inactive"}</td>
                                          <td><button className="btn btn-warning mt-2 w-100" data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() => handleView(item._id)}>View</button>
                                              <button className="btn btn-success mt-2 w-100" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(item._id)}>Edit</button>
                                              <button className="btn btn-danger mt-2 w-100" className="btn btn-danger mt-2"onClick={() => deleteService(item._id)}>Delete</button>
                                          </td>
                                          </tr>
                                        ))
                                      }
                                   </tbody>
                                </table>

                                {/* view modal */}
                                <div className="modal fade" id="viewModal" tabIndex="-1">
                                    <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                    <h4>Service Details</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                 </div> 
                                 <div className="modal-body">  
                                    <div className="text-center">
                                     <img src={`http://localhost:3000/uploads/${viewService.image}`} width="180" height="180" alt=""/>
                                    </div>   
                                    <hr/>
                                    <h5>Name :{viewService.name}</h5>
                                    <h5>Service :{viewService.service}</h5>
                                    <p>Age Group :{viewService.ageGroup}</p>
                                    <p>Gender :{viewService.gender}</p>
                                    <p>Vital :{viewService.vital}</p>
                                    <p>Preventive Wellness :{viewService.preventiveWellness}</p>
                                    <p>Short Description :{viewService.shortDescription}</p>
                                    <p>Long Description :{viewService.longDescription}</p>
                                    <p>MRP :₹ {viewService.mrp}</p>
                                    <p>Selling Price :₹ {viewService.sellingPrice}</p>
                                    <p>Status :{viewService.status?"Active":"Inactive"}</p>
                                 </div>   
                                 <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                 </div>
                               </div>

                           </div>
                        </div>

                        {/* Edit Modal */}
                        <div className="modal fade" id="editModal" tabIndex="-1">
                           <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                 <div className="modal-header">
                                    <h4>Edit Service</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                 </div>
                                 <div className="modal-body">
                                    <div className="row">
          
          {/* Name */}
          <div className="col-md-6 mb-3">
            <label>Name</label>
            <input  type="text"  className="form-control" name="name"  value={editService.name || ""}  onChange={handleChange} />
          </div>

          {/* Service */}
          <div className="col-md-6 mb-3">
            <label>Service</label>
            <input  type="text"  className="form-control" name="service"  value={editService.service || ""}  onChange={handleChange} />
          </div>

          {/* Age Group */}
          <div className="col-md-6 mb-3">
            <label>Age Group</label>
            <input type="text" className="form-control" name="ageGroup" value={editService.ageGroup || ""} onChange={handleChange} />
          </div>

          {/* Gender */}
          <div className="col-md-6 mb-3">
            <label>Gender</label>
            <input type="text" className="form-control" name="gender" value={editService.gender || ""} onChange={handleChange}/>
          </div>

          {/* Vital */}
          <div className="col-md-6 mb-3">
            <label>Vital</label>
            <input type="text" className="form-control" name="vital" value={editService.vital || ""} onChange={handleChange}/>
          </div>

          {/* Preventive Wellness */}
          <div className="col-md-12 mb-3">
            <label>Preventive Wellness</label>
            <input type="text" className="form-control" name="preventiveWellness" value={editService.preventiveWellness || ""} onChange={handleChange}/>
          </div>

          {/* Short Description */}
          <div className="col-md-12 mb-3">
            <label>Short Description</label>
            <textarea className="form-control" rows="2" name="shortDescription" value={editService.shortDescription || ""} onChange={handleChange} ></textarea>
          </div>

          {/* Long Description */}
          <div className="col-md-12 mb-3">
            <label>Long Description</label>
            <textarea className="form-control" rows="4" name="longDescription" value={editService.longDescription || ""} onChange={handleChange}></textarea>
          </div>

          {/* MRP */}
          <div className="col-md-6 mb-3">
            <label>MRP</label>
            <input type="number" className="form-control" name="mrp" value={editService.mrp || ""} onChange={handleChange}/>
          </div>

          {/* Selling Price */}
          <div className="col-md-6 mb-3">
            <label>Selling Price</label>
            <input type="number" className="form-control" name="sellingPrice" value={editService.sellingPrice || ""} onChange={handleChange} />
          </div>

          {/* Current Image */}
          <div className="col-md-6">
            <label>Current Image</label>
            <br />
            {editService._id && (
              <img src={`http://localhost:3000/uploads/${editService.image}`} width="120" height="120" alt=""/>
               )}
          </div>
          {/* New Image */}
          <div className="col-md-6">
            <label>Change Image</label>
            <input type="file" className="form-control" onChange={(e)=>setEditImage(e.target.files[0])}/>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-dismiss="modal" id="editClose"> Close </button>
        <button className="btn btn-success" onClick={updateService}>Update</button>
      </div>
    </div>
  </div>
</div>

                 </div>      
              </div> 
            </div>
          </div>
       </div>
    </div>
  )
}

export default Services


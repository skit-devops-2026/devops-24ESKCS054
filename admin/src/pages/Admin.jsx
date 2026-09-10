import React,{useEffect,useState} from "react";
import API from "../api/categoryApi";
import {Link} from 'react-router-dom'
import "./Admin.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faImage, faMoneyBill1Wave, faNewspaper, faPhone, faProcedures, faRightFromBracket, faRightToBracket, faStar, faStreetView, faTableCells, faUpDown, faUserNurse, faUsersViewfinder ,faUserGear ,faGear , faUser ,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Admin = () => {

   const [category,setCategory]=useState([]);
   const [viewCategory,setViewCategory]=useState({});
   
   const [editCategory,setEditCategory]=useState({
      name:"", description:"" });

   const [editImage,setEditImage]=useState(null);
   
   //get category function
   const getCategory=async()=>{
      try{
         const response=await API.get("/category/all");
         console.log(response.data);
         setCategory(response.data.data);
      }
      catch(error){
         console.log(error);
      }
   }

//view function
const handleView=async(id)=>{
try{
const response=await API.get(`/category/${id}`);
setViewCategory(response.data.data);
}
catch(error){
    console.log(error);
}
}

//edit function
const handleEdit=async(id)=>{
   try{
      const response=await API.get(`/category/${id}`);
        setEditCategory(response.data.data);
      }
   catch(error){
       console.log(error);
          }
      }

//input change
const handleChange=(e)=>{
  setEditCategory({...editCategory,
      [e.target.name]:e.target.value
   })
}      

//update function
const updateCategory = async () => {
   console.log(editImage);

  try {
    const formData = new FormData();

    formData.append("name", editCategory.name);
    formData.append("description", editCategory.description);

    if (editImage) {
      formData.append("image", editImage);
    }

    const response = await API.put(
      `/category/update/${editCategory._id}`,
      formData
    );

    alert(response.data.message);
    await getCategory();
    setEditImage(null);
    document.getElementById("editClose").click();
  }
   catch (error) {
    console.log(error);
  }
};

//delte function
const handleDelete = async (id) => {
    try {
        await API.delete(`/category/delete/${id}`);
        alert("Category Deleted Successfully");
        await getCategory();
    }
    catch (error) {
       console.log(error);
    }
}

useEffect(()=>{
getCategory();
},[])

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
                              <li><Link to={"/Admin"} className="btn text-white "><FontAwesomeIcon className='me-2' icon={faTableCells} />Category</Link></li>
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
          <div className='col-9 category m-2 rounded-4'>
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

            
            <div className='dataBase bg-white rounded-2 p-2 mx-2 shadow'>
                 
                    <form className='d-flex justify-content-between'>
                        <input className='border border-secondary-subtle rounded-2' type="text" placeholder='Search'/>
                       
                        <button className="btn btn-success " type="submit" ><Link to="/Category" className=' text-decoration-none text-white ' >Create New Cetegory</Link></button> 
                    </form>
                    <hr/>
                    <form className='d-flex justify-content-between'>
                       <button className='btn btn-outline-secondary'>Status Filter</button> 
                        <input type="date" className='border border-light-subtle'/>
                        <input type="date" className='border border-light-subtle' />
                        <button className='btn btn-info'>Clear Filter</button>
                    </form>
                    <div className="table-scroll">
                    <table className="table table-bordered mt-2">
                       <thead>
                           <tr>
                             <th scope="col">S.No.</th>
                              <th scope="col">Category ID</th>
                             <th scope="col">Category Name<FontAwesomeIcon className='me-2' icon={faUpDown} /></th>
                             <th scope="col">Category Image</th>
                              <th scope="col" >Description</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                              { category.map((item,index)=>(
                                <tr key={item._id}>
                                  <th>{index+1}</th>
                                 <td>{item._id}</td>
                                 <td>{item.name}</td>
                                 <td><img src={`http://localhost:3000/uploads/${item.image}`}
                                width="70" height="70"
                              alt={item.name}/>
                                 </td>
                                 <td  className="description-column">{item.description}</td>
                                 <td>{item.status ?"Active":"Inactive"}</td>
                                 <td className="d-flex flex-column ">
                                   <button className="btn btn-warning" data-bs-toggle="modal"
                                   data-bs-target="#viewModal" onClick={() => handleView(item._id)}>View
                                </button>
                                    <button className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={()=>handleEdit(item._id)}>Edit
                                    </button>
                                    <button className="btn btn-danger mt-2" onClick={() => handleDelete(item._id)}>delete</button>
                                 </td>
                               </tr>
                                ))
                              }
                        </tbody>
                     </table>
                     </div>

                  {/* view model */}
                  <div className="modal fade" id="viewModal" tabIndex="-1">

                     <div className="modal-dialog">
                        <div className="modal-content">
                           <div className="modal-header">

                              <h5>Category Details</h5>

                              <button className="btn-close" data-bs-dismiss="modal"></button>

                           </div>
                           <div className="modal-body">
                              <div className="text-center">
                                <img src={`http://localhost:3000/uploads/${viewCategory.image}`}
                                 width="120" height="120" alt={viewCategory.name}/>
                              </div>
                              <hr/>
                              <h5>Category Name :{viewCategory.name}</h5>
                              <p>Description :{viewCategory.description}</p>
                              <p>Status :{viewCategory.status ?"Active":"Inactive"}</p>
                          </div>
                          <div className="modal-footer">
                              <button className="btn btn-secondary" data-bs-dismiss="modal"> Close</button>
                           </div>
                        </div>

                     </div>
                  </div>

                  {/* edit/update modal */}
                  <div className="modal fade" id="editModal" tabIndex="-1">
                     <div className="modal-dialog">
                        <div className="modal-content">
                           <div className="modal-header">
                              <h5>Edit Category</h5>
                              <button className="btn-close" data-bs-dismiss="modal"></button>
                           </div>
                           <div className="modal-body">
                              <input type="text" name="name" className="form-control" value={editCategory.name || ""}
                               onChange={handleChange} />
                           <br/> 
                           <img  src={`http://localhost:3000/uploads/${editCategory.image}`}  width="120"
                               height="120"  alt=""/>
                           <br/><br/>
                           <input type="file" className="form-control"
                              onChange={(e) => {console.log("Selected File:", e.target.files[0]);
                                  setEditImage(e.target.files[0]);
                                 }}/>
                             <br/>
                           <textarea className="form-control" rows="4" name="description" value={editCategory.description || ""}
                              onChange={handleChange}/>
                          </div>

                          <div className="modal-footer">

                             <button className="btn btn-success" onClick={updateCategory}>
                              Update
                             </button>
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

export default Admin

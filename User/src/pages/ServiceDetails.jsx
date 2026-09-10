import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from "../api/serviceApi";
import "./ServiceDetails.css"

import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoSearch } from "react-icons/io5";

const ServiceDetails = () => {

    const { slug } = useParams();
     const [services, setServices] = useState([]);

    const getService = async () => {

    try{
        const response = await API.get(
            `/service/slug/${slug}`
        );
        console.log("API Response:", response.data.data);
        setServices(response.data.data);
    }
    catch(error){
        console.log(error);
    }
}

useEffect(()=>{
    getService();
},[slug]);

    return (
        <>
        <Header/>
        <div className="container-fliud main-content p-5">
        <div className="container">  
          <div className="text-center ">
            <h2>At Home {slug}</h2>
            <h3>Caring for You, Every Step of the Way.</h3>
          </div>

          <div className="row mt-4">
            <div className="col-8">
          <form className="d-flex" action="">
             
      <div className="dropdown px-3" data-bs-auto-close="outside">

      <button
        className="mainbtn btn dropdown-toggle rounded-pill"
        type="button"
        data-bs-toggle="dropdown"
      >
        Age
      </button>

      <ul className="dropdown-menu p-3">

        <li>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Age-0"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Age-0"
            >
              &lt;18 Years
            </label>
          </div>
        </li>

        <li>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Age-1"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Age-1"
            >
              18 - 40 Years
            </label>
          </div>
        </li>

        <li>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Age-2"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Age-2"
            >
              41 - 65 Years
            </label>
          </div>
        </li>

        <li>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Age-3"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Age-3"
            >
              Above 65 Years
            </label>
          </div>
        </li>

      </ul>

    </div>

     <div className="dropdown px-3" data-bs-auto-close="outside ">
      <button
        className="mainbtn btn  dropdown-toggle rounded-pill "
        type="button"
        data-bs-toggle="dropdown"
      >
        Gender
      </button>

      <ul className="dropdown-menu p-3">

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Gender-0"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Gender-0"
            >
              Male
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="option-Gender-1"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="option-Gender-1"
            >
              Female
            </label>
          </div>
        </li>

      </ul>
    </div>

    <div className="dropdown px-3" data-bs-auto-close="outside ">
      <button
        className="mainbtn btn  dropdown-toggle rounded-pill"
        type="button"
        data-bs-toggle="dropdown"
      >
        Vital Systems
      </button>

      <ul className="dropdown-menu p-3">

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-0"
            />
            <label className="form-check-label ms-2" htmlFor="vital-0">
              Heart Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-1"
            />
            <label className="form-check-label ms-2" htmlFor="vital-1">
              Hormonal Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-2"
            />
            <label className="form-check-label ms-2" htmlFor="vital-2">
              Kidney Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-3"
            />
            <label className="form-check-label ms-2" htmlFor="vital-3">
              Liver Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-4"
            />
            <label className="form-check-label ms-2" htmlFor="vital-4">
              Gut Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-5"
            />
            <label className="form-check-label ms-2" htmlFor="vital-5">
              Reproductive Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-6"
            />
            <label className="form-check-label ms-2" htmlFor="vital-6">
              Lungs Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-7"
            />
            <label className="form-check-label ms-2" htmlFor="vital-7">
              Bone and Muscle Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-8"
            />
            <label className="form-check-label ms-2" htmlFor="vital-8">
              Mental Health
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="vital-9"
            />
            <label className="form-check-label ms-2" htmlFor="vital-9">
              Skin & Hair Health
            </label>
          </div>
        </li>

      </ul>
    </div>

     <div className="dropdown px-3" data-bs-auto-close="outside ">
      <button
        className="mainbtn btn  dropdown-toggle rounded-pill"
        type="button"
        data-bs-toggle="dropdown"
      >
        Preventive & Wellness
      </button>

      <ul className="dropdown-menu p-3">

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-0"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-0"
            >
              Weight Management
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-1"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-1"
            >
              Allergy & Intolerance
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-2"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-2"
            >
              Longevity
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-3"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-3"
            >
              Cancer Risk Screening
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-4"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-4"
            >
              Genetic
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-5"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-5"
            >
              Wellness
            </label>
          </div>
        </li>

        <li>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="preventive-6"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="preventive-6"
            >
              Anti-Aging & Longevity
            </label>
          </div>
        </li>

      </ul>
    </div>
          </form>
           </div>

           <div className="col-4">
            <form action="">
                <div className="search-box d-flex  rounded-pill">
                 <input type="text"  className="form-control border-0 shadow-none  btn-outline-secondary rounded-pill" placeholder="Search" autoComplete="off"/>
                </div>
            </form>
           </div>
          </div>
        </div>  
        </div>  

        {/* Cart list */}
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row">
            
              { 
                services.map((item) => (
                     
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4"  key={item._id} >

                        <div className="service-card p-2">

                            <img
                                src={`http://localhost:3000/api/service/image/${item.image}`}
                                className="service-image card-img-top rounded-circle p-2"
                                alt={item.name}  />

                            <div className="card-body text-center">
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                                <p className="card-text">
                                    AED {item.sellingPrice}
                                </p>

                               <Link to={`/service-detail/${item.detailSlug}`}>
                                <button className="btn-book btn w-100 rounded-pill"> Book Now </button>
                                 </Link>

                            </div>

                        </div>

                    </div>

                ))
            }
            
            </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}

export default ServiceDetails;
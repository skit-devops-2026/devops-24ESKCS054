import "./ServiceList.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/serviceApi";
import Header from "../components/Header";
import Footer from "../components/Footer";


const ServiceList = () => {

    const { detailSlug } = useParams();
    const [service, setService] = useState({});

    const getService = async () => {
        try {
            const response = await API.get( `/service/detail/${detailSlug}`);
            console.log("Service Data:", response.data.data);
            console.log("detailSlug =", detailSlug);
            console.log("Full Response =", response);
            console.log("Service Data =", response.data);
            setService(response.data.data);
        }
         catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    getService();
}, [detailSlug]);

    // click to add cart
    const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
 console.log("Current service =", service);
    return (
        <>
            <Header/>
            {/* Left side */}
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 serviceimg">
                          <img src={`http://localhost:3000/api/service/image/${service.image}`}
                            alt={service.name} className="img-fluid rounded"/>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                           <h2>{service.name}</h2>
                            <h5>(0 Reviews)</h5>
                            <h2>AED {service.sellingPrice}</h2>

                            <div className="d-flex mt-3"> 
                                <div className="col-lg-4 col-md-6">
                                     <div className="qty-box">
                                        <button className="qty-btn" onClick={decrease}>−</button>
                                            <span className="qty-count">{count}</span>
                                        <button className="qty-btn" onClick={increase}>+</button>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 ">
                                    <button className="aed-cart-btn btn w-100 rounded-pill"  data-bs-toggle="modal" data-bs-target="#bookingModal">Add to Cart</button>
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="talk-btn btn w-100 rounded-pill" data-bs-toggle="modal" data-bs-target="#expertModal">Talk To An Expert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add to Cart Model */}
            <div
  className="modal fade"
  id="bookingModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header border-0">
        <h3 className="fw-bold text-brown">
          Schedule Your Appointment
        </h3>

        <button
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body">

        <h4 className="mb-4"> {service.name}</h4>

        <label className="fw-semibold mb-2">
          Select Date & Time
        </label>

        <div className="row g-3 mb-4">

          <div className="col-md-6">
            <input
              type="date"
              className="form-control rounded-pill"
            />
          </div>

          <div className="col-md-6">
            <select className="form-select rounded-pill">
              <option>Select Time Slot</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>

        </div>

        <div className="d-flex justify-content-between mb-2">

          <h6>Booking For</h6>

          <small>
            Already Have Account?
            <a href="/"> Login</a>
          </small>

        </div>

        <div className="row g-3">

          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="First Name"
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Last Name"
            />
          </div>

          <div className="col-12 mt-3">
            <select className="form-select rounded-pill">
              <option>Self</option>
              <option>Father</option>
              <option>Mother</option>
            </select>
          </div>

        </div>

        <div className="policy-box mt-4">

          <ul>
            <li>Free service charge when your cart hits AED 249.</li>
          </ul>

          <h5>Cancellation</h5>

          <ul>
            <li>More than 3 hrs before - full refund</li>
            <li>1-3 hrs before - AED 75 fee</li>
            <li>Less than 1 hr - no refund</li>
          </ul>

          <h5>Rescheduling</h5>

          <ul>
            <li>More than 1 hr before - Free</li>
            <li>Less than 1 hr - AED 99 fee</li>
          </ul>

        </div>

        <textarea
          className="form-control mt-4"
          rows="4"
          placeholder="Remark"
        ></textarea>

      </div>

      <div className="modal-footer border-0">

        <button className="checkout-btn">
          Checkout
        </button>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  </div>
           </div>

           {/* talk to expert Model */}
           <div
  className="modal fade"
  id="expertModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content expert-modal">

      <div className="modal-header border-0">
        <div>
          <h1 className="modal-title">Talk To An Expert</h1>
          <h3 className="mt-3"> {service.name}</h3>
        </div>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body">

        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              type="date"
              className="form-control custom-input rounded-pill"
            />
          </div>

          <div className="col-md-6 mb-3">
            <select className="form-select custom-input rounded-pill">
              <option>Select Time</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>

        </div>

        <input
          type="text"
          className="form-control custom-input mb-3 rounded-pill"
          placeholder="Name"
        />

        <div className="input-group mb-3">

          <span className="input-group-text bg-white rounded-start-pill">
            🇦🇪 +91
          </span>

          <input
            type="tel"
            className="form-control custom-phone rounded-end-pill"
            placeholder="Phone Number"
          />

        </div>

        <input
          type="email"
          className="form-control custom-input mb-3 rounded-pill"
          placeholder="Email"
        />

        <textarea
          rows="5"
          className="form-control custom-textarea"
          placeholder="Reason"
        ></textarea>

      </div>

      <div className="modal-footer border-0">

        <button className="schedule-btn">
          Schedule A Call
        </button>

      </div>

    </div>
  </div>
           </div>

            <Footer/>
        </>
    );
};

export default ServiceList;
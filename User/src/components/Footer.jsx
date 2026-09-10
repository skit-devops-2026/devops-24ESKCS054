import React from 'react'

import {Link} from 'react-router-dom'

const footer = () => {
  return (
    <>
      <footer className='mt-5'>
        <div className="container-fluid">
            <div className="container ">
                <div className="row pt-5">
                    <div className="col-3">
                        <h3>Elara Health</h3>
                        <div>support@trustelara.com</div>
                    </div>
                    <div className="col-3">
                        <div className='d-flex flex-column mb-3'>
                            <h5>Services Categories</h5>
                            <div className="footer-link">
                              <Link to="/services/doctor-visit" className="service">
                                Doctor Visit 
                              </Link>
                            </div>
                            <div className="footer-link">
                              <Link to="/services/iv-therapy" className="service">
                                IV Therapy 
                              </Link>
                            </div>
                            
                            <div className="footer-link">
                              <Link to="/services/physiotherapy" className="service">
                                Physiotherapy 
                              </Link>
                            </div>
                            
                            <div className="footer-link">
                              <Link to="/services/care" className="service">
                                Care 
                              </Link>
                            </div>
                            
                            <div className="footer-link">
                              <Link to="/services/health-program" className="service">
                                Health Programs 
                              </Link>
                            </div>
                            
                            <div className="footer-link">
                              <Link to="/services/other" className="service">
                                Others
                              </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                         <div>
                             <h5>Pages</h5>      
                        </div>  
                    </div>
                    <div className="col-3">
                        <div>
                            <h5>Accepted Payment</h5>
                            <h3>VISA</h3>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        © Elara Health 2026. All rights reserved
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default footer

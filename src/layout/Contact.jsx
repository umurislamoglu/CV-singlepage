import React from "react";

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-evenly container " id="contact">
      <h4 className="mt-5 mb-5 align-self-center fw-normal fs-1">Contact Me</h4>
      <div className="row mt-5">

      <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
      <i className="bi bi-pin-map" style={{"font-size":"75px"}}> </i>
        <h5 className="fw-normal mt-3">Adress</h5>
        <p className="fw-light"> Gökay sokak Kadıköy/Istanbul</p>
      </div>
      <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
      <i className="bi bi-phone" style={{"font-size":"75px"}}></i>
        <h5 className="fw-normal mt-3">Phone</h5>
        <p className="fw-light"> 0542 439 20 19</p>
      </div>

      <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
      <i className="bi bi-envelope" style={{"font-size":"75px"}} ></i>
        <h5 className="fw-normal mt-3a">Email</h5>
        <p className="fw-light"> umurislamoglu@gmail.com</p>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;

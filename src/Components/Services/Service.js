import React from "react";
import EngagementIcon from "../../assets/icons/Engagement.png";
import TrainingIcon from "../../assets/icons/Training.png";
import facilationIcon from "../../assets/icons/facilation.png";
import ConsultationIcon from "../../assets/icons/Consultation.png";
import CoominucationsIcon from "../../assets/icons/Coominucations.png";


const Service = () => {

  
  return (
    <div>
      <div className="service-section mt-5">
        <div className="container">
          <div className="row">
            <h2 className="headertitle fontbold underline-item text-center">SERVICES</h2>
            
            <div
              className="sevices-content d-flex mt-3"
              style={{ columnGap: "100px" }}
            >
              <div className="col sevices-content-data text-end mt-5">
                <h2 className="fontbold">ENGAGEMENT</h2>
                <p className="fontreg">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </p>
              </div>
              <div className="img-data col d-flex align-items-center">
                <img
                  src={EngagementIcon}
                  className="img-fluid"
                  alt="aboutimage"
                ></img>
              </div>
            </div>
            <div
              className="sevices-content positiondata d-flex"
              style={{ columnGap: "100px" }}
            >
              <div className="img-data col d-flex align-items-center">
                <img
                  src={CoominucationsIcon}
                  className="img-fluid"
                  alt="aboutimage"
                ></img>
              </div>
              <div className=" col sevices-content-data  text-start mt-5">
                <h2 className="fontbold">COMMUNICATIONS</h2>
                <p className="fontreg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                  pellentesque et. Sit ac fames facilisis nibh faucibus.
                </p>
              </div>
            </div>

            <div
              className="sevices-content d-flex justify-content-center"
              style={{ columnGap: "100px" }}
            >
              <div className="col sevices-content-data text-end mt-5">
                <h2 className="fontbold">FACILITATION</h2>
                <p className="fontreg">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </p>
              </div>
              <div className="img-data col d-flex align-items-center">
                <img
                  src={facilationIcon}
                  className="img-fluid"
                  alt="aboutimage"
                ></img>
              </div>
            </div>

            <div
              className="sevices-content positiondata d-flex justify-content-center mt-3"
              style={{ columnGap: "100px" }}
            >
              <div className="img-data col d-flex align-items-center">
                <img
                  src={ConsultationIcon}
                  className="img-fluid"
                  alt="aboutimage"
                ></img>
              </div>
              <div className="col sevices-content-data text-start mt-5">
                <h2 className="fontbold">CONSULTATION AND RESEARCH</h2>
                <p className="fontreg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                  pellentesque et. Sit ac fames facilisis nibh faucibus.
                </p>
              </div>
            </div>

            <div
              className="sevices-content d-flex justify-content-center mt-3"
              style={{ columnGap: "100px" }}
            >
              <div className="col sevices-content-data mt-5 d-flex flex-column text-end">
                <h2 className="fontbold">TRANING & MENTORING</h2>
                <p className="fontreg">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </p>
              </div>
              <div className="img-data col d-flex align-items-center">
                <img
                  src={TrainingIcon}
                  className="img-fluid"
                  alt="aboutimage"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

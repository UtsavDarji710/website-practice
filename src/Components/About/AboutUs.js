import React from "react";
import aboutIcon from "../../assets/icons/aboutus.png";
import EnagagementIcon from "../../assets/icons/Enagagementicon.png";
import coomunicationicon from "../../assets/icons/coomunicationicon.png";
const AboutUs = () => {
  return (
    <div className="about-section mt-5">
      <div className="container">
        <div className="row positiondata" style={{columnGap:'100px'}}>
          <div className="col d-flex justify-content-center align-items-center">
            <img src={aboutIcon}  alt="aboutimage"></img>
          </div>
          <div className="col">
            <h2 className="fontbold underline-item ">ABOUT US</h2>
            <p className="fontreg">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
            <div className="about-contentdata d-flex" style={{ columnGap: "100px" }}>
              <div className="col" >
                <img
                  src={EnagagementIcon}
                  // className="img-fluid"
                  alt="settingicon"
                ></img>
                <h3 className="fontbold1">Engagement</h3>
                <p className="fontreg1">
                  We are engagement specialists, who have led projects at all
                  levels of the IAP2 spectrum. READ MORE
                </p>
              </div>
              <div className="col">
                <img
                  src={coomunicationicon}
                  // className="img-fluid"
                  alt="settingicon"
                ></img>
                <h3 className="fontbold1">Communications</h3>
                <p className="fontreg1">
                  We are award-winning leaders in communications and campaign
                  management. READ MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

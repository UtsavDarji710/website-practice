import React from 'react'
import JessicaIcon from '../../assets/images/Jessica.png'
import JohnyIcon from '../../assets/images/Johny.png'
import SanyaIcon from '../../assets/images/Sanya.png'



const Team = () => {
  return (
    <div className="team-section mt-5">
      <div className="container">

        <div className="row">
        <h2 className="headertitle fontbold underline-item text-center">OUR TEAM</h2>
         <div className="team-content mt-3 d-flex justify-content-between align-items-center">
         <div className="d-flex flex-column justify-content-center  align-items-center">
            <img src={JessicaIcon}  className='img-fluid' alt="aboutimage"></img>
            <h4 className='mt-5'>Jessica D’suza</h4>
          </div>
          <div className="d-flex flex-column justify-content-center  align-items-center">
            <img src={JohnyIcon} className='img-fluid' alt="aboutimage"></img>
            <h4 className='mt-5'>Johny Williams</h4>
          </div>
          <div className="d-flex flex-column justify-content-center  align-items-center">
            <img src={SanyaIcon} className='img-fluid' alt="aboutimage"></img>
            <h4 className='mt-5'>Sanya R,</h4>
          </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Team

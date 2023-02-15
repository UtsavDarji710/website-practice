import React from 'react'
import { Col, Row } from 'react-bootstrap'


import Layer1Icon from '../../assets/images/clients/Layer1.png'
import Layer2Icon from '../../assets/images/clients/Layer2.png'
import Layer3Icon from '../../assets/images/clients/Layer3.png'
import Layer4Icon from '../../assets/images/clients/Layer4.png'
import Layer5Icon from '../../assets/images/clients/Layer5.png'
import Layer6Icon from '../../assets/images/clients/Layer6.png'
import Layer7Icon from '../../assets/images/clients/Layer7.png'
import Layer8Icon from '../../assets/images/clients/Layer8.png'
import Layer9Icon from '../../assets/images/clients/Layer9.png'

const Client = () => {
  return (
    <div className="client-section mt-5">
    <div className="container">

      <div className="row">
      <h2 className="fontbold underline-item text-center">OUR CLIENTS</h2>
       <div className="client-content mt-3 d-flex justify-content-around ">
       <Row className="client-content-data d-flex justify-content-between">
        <Col><img src={Layer1Icon}  className='clientimg' alt="aboutimage"></img></Col>
        <Col><img src={Layer2Icon}  className='clientimg' alt="aboutimage"></img></Col>
        <Col>
          <img src={Layer3Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
          <img src={Layer4Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
          <img src={Layer5Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
        <img src={Layer6Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
        <img src={Layer7Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
        <img src={Layer8Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
        <Col>
        <img src={Layer9Icon}  className='clientimg' alt="aboutimage"></img>
        </Col>
          
        </Row>
        {/* <div className="client-content-data d-flex justify-content-between">
        </div> */}
    
          </div>

      </div>
    </div>
  </div>
  )
}

export default Client

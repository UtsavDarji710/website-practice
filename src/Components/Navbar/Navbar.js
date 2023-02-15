import React from 'react'
import {Nav,Navbar, Container} from 'react-bootstrap';
import logo from '../../assets/icons/logo.png'
import '../../style/style.scss'
import headerIcon1 from '../../assets/icons/Asset1.png'
import headerIcon2 from '../../assets/icons/Asset2.png'


const NavbarComp = () => {
  return (
    <div className='navbar-item'>
      <div className='headerImage1'><img src={headerIcon1} className='img-fluid' alt='avtar1'/></div>
      <div className='headerImage2'><img src={headerIcon2}className='img-fluid' alt='avtar2'/></div>
      <Navbar expand="lg" className='nav'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} className='img-fluid' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end fontreg" id="basic-navbar-nav">
        
            <Nav.Link href="#aboutus" className='me-3'>About Us</Nav.Link>
            
            <Nav.Link href="#services" className='me-3'>Services</Nav.Link>
       
            <Nav.Link href="#teams" className='me-3'>Team</Nav.Link>
          
            <Nav.Link href="#clients" className='me-3'>Clients</Nav.Link>
          
            <Nav.Link href="#contactus" className='me-3'>Contact Us</Nav.Link>
         
        </Navbar.Collapse>
      </Container>
      {/* <div className='headerImage2'></div> */}
    </Navbar>
   
    
      
    </div>
  )
}

export default NavbarComp

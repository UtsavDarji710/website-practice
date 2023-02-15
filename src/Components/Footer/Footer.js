import React from 'react'

import facebookIcon from '../../assets/images/facebook.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import GoogleIcon from '../../assets/images/Google.png'

const Footer = () => {
  return (
    <div>
      <section className="mt-5 footer-section">
      <footer className="text-center text-lg-start">
        <div className="container p-5" style={{ background: '#BFDBFF'}}>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="fontbold text-uppercase">Social</h6>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center gap-3">
                  <img src={facebookIcon} alt="fb"></img>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Facebook
                  </a>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <img src={linkedinIcon} alt="lnkd"></img>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Linkedin
                  </a>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <img src={GoogleIcon} alt="ggl"></img>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Google +
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="text-uppercase fontbold mb-0">Explore</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Clients
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="text-uppercase fontbold">Contact</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    Lorem ipsum dummy address
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    used for display
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none fontreg">
                    1234567890
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="text-uppercase fontbold mb-0">Email</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark wo text-decoration-none fontreg">
                    mendlesoncommunication@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-transparent fontreg">
          <p>© Copyright 2018:
          <a
            className="text-dark text-decoration-none"
            href="https://mdbootstrap.com/"
          >
            Mendleson Communication Pty Ltd
          </a></p>
        </div>
      </footer>
    </section>
    </div>
  )
}

export default Footer

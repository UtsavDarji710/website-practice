import React from 'react'
import Project_1Icon from '../../assets/images/Project_1.png'
import Project_2Icon from '../../assets/images/Project_2.png'
import Project_3Icon from '../../assets/images/Project_3.png'

const Projects = () => {
  return (
    <div className="project-section mt-5">
    <div className="container">

      <div className="row">
      <h2 className="fontbold underline-item text-center">OUR PROJECTS</h2>
       <div className="project-content mt-3 d-flex justify-content-between g-3">
       <div className="">
          <img src={Project_1Icon}  className='img-fluid' alt="aboutimage"></img>
        </div>
        
        <div className="project-content-1 d-flex flex-column justify-content-between g-3">
        <div className="">
          <img src={Project_2Icon}  
          className='img-fluid' alt="aboutimage"></img>
        </div>
        <div className="">
          <img src={Project_3Icon}  className='img-fluid' alt="aboutimage"></img>
        </div>
        </div>

          </div>

      </div>
    </div>
  </div>
  )
}

export default Projects

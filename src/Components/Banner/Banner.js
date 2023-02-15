import React from 'react'
import '../../style/style.scss'

import headerIcon6 from '../../assets/icons/bannerimage.png'

const Banner = () => {
  return (
    <div className='banner-section'>
      
    <div className="container"> 
    <div className="row">
  

      <div className='banner-content-section d-flex justify-content-around' style={{ columnGap: "150px" }}>
      <div className='headerImage6 col'><img src={headerIcon6} alt='avtar6'/></div>
      <div className='banner-content col'>
        <h3 className='fontbold'>Mendleson Communication and Engagement</h3>
        <p className='fontreg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
      </div>

      </div>
      
      </div>
      </div>
   </div>
  //  </div>
  )
}

export default Banner

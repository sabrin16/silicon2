import React from 'react'
import light1 from '../assets/images/icons/appstore-light.svg'
import dark2 from '../assets/images/icons/appstore-dark.svg'
import light3 from '../assets/images/icons/google-light.svg'
import dark4 from '../assets/images/icons/appstore-dark.svg'
import iphones from '../assets/images/iphones.png'

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
      <div className="container space-3">
        <h1 className="d4"> Manage All Your Money in One App</h1>
      <div className="content space-y-3"> 
           <p className="text-lg">We offer you a new generation of the mobile banking. 
             Save, spend & manage money in your pocket.</p>
           <div className="market-btns">
            <a 
            href="#"
              className="store-btn"
              aria-label="Download on the App Store">
              <span className="sr-only">Download on the App Store</span>
              <img className="show-light" src={light1} alt="App Store logo" />
              <img className="show-dark" src={dark2} alt="App Store logo" />
            </a>

            <a
              href="#"
              className="store-btn"
              aria-label="Get it on Google Play">
              <span className="sr-only">Get it on Google Play</span>
              <img className="show-light" src={light3} alt="Google Play logo" />
              <img className="show-dark" src={dark4} alt="Google Play logo" />
            </a>
           </div>

          <div className="more">
           <a href="#features" className="btn-round btn-white">
            <i className="fa-solid fa-chevron-down"></i>
           </a>
           <span>Discover more</span>
          </div>
       </div>


       <div className="phone-img-container">
         <img src={iphones} alt= "two iphones with charts and a creditcard on the screen" />
       </div>

      </div>
    </section>
  )
}

export default Showcase
import React from 'react'
import contacts from '../assets/images/icons/message.svg'
import credit from '../assets/images/icons/message.svg'
import bucket from '../assets/images/icons/message.svg'
import iconr from '../assets/images/icons/message.svg'

const Recieve = () => {
  return (
    <section className="recieve-container">
    <div className="recieve-img">
        <img src={contacts} alt="contact" />
    </div>
    <div className="recieve-info">
        <h2>Receive payment from international bank details</h2>
        <div className="recieve-info-container">
            <div className="recieve-info-inner">
                <img width="60" height="60" src={credit} />
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="recieve-info-inner">
                <img width="60" height="60" src={bucket} />
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>    
            </div>
        </div>
       
       
        <button className="learn-more">
            Learn More
            <img width="20" height="20" src={iconr} alt="" />
        </button>
    </div>
</section>
  )
}

export default Recieve
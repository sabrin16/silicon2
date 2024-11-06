import React from 'react'
import notification from '../assets/images/icons/notification.svg'

const Subscribe = () => {
  return (
    <section className="subscribe">
        <img src={notification} alt="notification" />
        <h4 id="subscribe-title">Subscribe to our newsletter to stay informed about latest updates</h4>
        <form action="#">
            
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
        </form>
    </section>
  )
}

export default Subscribe
import React from 'react'
import quotes from '../assets/images/icons/quotes.svg'
import rating from '../assets/images/icons/message.svg'
import designerPic from '../assets/images/icons/message.svg'
import quotes1 from '../assets/images/icons/quotes.svg'
import rating5 from '../assets/images/icons/message.svg'
import developerPic from '../assets/images/icons/message.svg'

const Testimonials = () => {
  return (
    <section className="testimonials">
        <h2>Clients are Loving Our App</h2>
        <div className="testimonial-item">
            <img width="44" height="44" className="testimonial-item-quotes" src={quotes} alt="quotes" />
            <img width="88" height="16" src={rating} alt="rating4" />
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            <div className="author">
                <img width="48" height="48" src={designerPic} alt="designer" />
                <div className="author-info">
                    <p className="author-name">Fannie Summers</p>
                    <p className="author-role">Designer</p>
                </div>
               
            </div>
        </div>
        <div className="testimonial-item">
            <img width="44" height="44" className="testimonial-item-quotes" src={quotes1} alt="quotes" />
            <img width="88" height="16" src={rating5} alt="rating5" />
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            <div className="author">
                <img width="48" height="48" src={developerPic} alt="developer" />
                <div className="author-info">
                    <p className="author-name">Fannie Summers</p>
                    <p className="author-role">Designer</p>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Testimonials
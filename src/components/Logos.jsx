import React from 'react'
import logoipsum from '../assets/images/logos/logoipsum1.svg' 
import logoipsum2 from '../assets/images/logos/logoipsum2.svg'
import logoipsum3 from '../assets/images/logos/logoipsum3.svg'
import logoipsum4 from '../assets/images/logos/logoipsum4.svg'
import logoipsum5 from '../assets/images/logos/logoipsum5.svg'
import logoipsum6 from '../assets/images/logos/logoipsum6.svg'

const Logos = () => {
  return (
    <section aria-label="our customers" className="logos">
      <div className="container">
        <div className="logo-card">
          <img src={logoipsum} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logoipsum2} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logoipsum3} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logoipsum4} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logoipsum5} alt="logoipsum logotype" />
        </div>
        <div className="logo-card">
          <img src={logoipsum6} alt="logoipsum logotype" />
        </div>
      </div>
    </section>
  )
}

export default Logos
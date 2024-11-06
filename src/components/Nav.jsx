import React, { useState } from 'react'
import logotype from '../assets/images/logotype.svg'
import dark from '../assets/images/logotype-dark.svg'
import hamburger from '../assets/images/icons/hamburger.svg'
import user from '../assets/images/icons/user.svg'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
      setShowMenu(!showMenu)
  }

  return (
    <nav className="main-nav" aria-label="main navigation">
        <a href="#main" className="skip-link">skip to main content</a>
        <NavLink className="nav-link" to="/About"></NavLink>
       
        <div className="container">
          <a href="/">
            <img className="show-light" src={logotype} alt="silicon logotype" />
            <img className="show-dark" src={dark} alt="silicon logotype" />
          </a>
           
      
          <div className="darkmode-toggle">
            <p>Dark Mode</p>
            <label className="toggle">
              <input type="checkbox" id="darkmode-switch" />
              <span className="slider"></span>
            </label>
          </div>
      
          <button className={`menu-btn ${showMenu ? 'active' : ''}`} aria-controls="main-menu" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </button>
      
      
          <ul id="main-menu" className="main-menu hide">
            <li className={`${showMenu ? 'show' : ''}`}>
              <a href="#" className="nav-link">features</a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">
                <img src={user} alt="" />
                <span>sign in /up</span>
              </a>
            </li>
          </ul>
      
        </div>
      </nav>
  )
}

export default Nav
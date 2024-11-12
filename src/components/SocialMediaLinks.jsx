import React from 'react';

const SocialMediaLinks = () => {
  return (

      <div className="socialmedia">
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://facebook.com/silicon2" 
          className="social-icon facebook" 
          aria-label="Follow us on Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://x.com/silicon2" 
          className="social-icon twitter" 
          aria-label="Follow us on Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://linkedin.com/silicon2" 
          className="social-icon linkedin" 
          aria-label="Follow us on LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
  )
}

export default SocialMediaLinks
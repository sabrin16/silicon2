import React, { useState } from 'react';
import axios from 'axios';
import notification from '../assets/images/icons/notification.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  // Hantera ändringar i inputfältet
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Hantera formulärets skickande
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enkel e-postvalidering
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address.');
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      return;
    }

    // Förbered data att skicka till API:t
    const requestData = {
      email: email,
    };

    try {
      // Skicka POST-förfrågan till API:t via axios
      const response = await axios.post(
        'https://win24-assignment.azurewebsites.net/api/forms/subscribe', 
        requestData
      );

      // Om begäran lyckades, visa ett framgångsmeddelande
      if (response.status === 200) {
        setStatus('Thank you for subscribing!');
        setEmail(''); // Tömma inputfältet efter framgångsrik inskick

      // Ta bort statusmeddelandet efter 5 sekunder
      setTimeout(() => {
        setStatus(null);
      }, 5000); // 5000 ms = 5 sekunder
      } else {
        // Om API:t svarar med ett annat status, visa ett felmeddelande
        setStatus('Something went wrong. Please try again later.');

      // Ta bort statusmeddelandet efter 5 sekunder
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      }
    } catch (error) {
      // Om ett nätverksfel eller annat fel inträffar
      setStatus('Network error. Please try again later.');

    // Ta bort statusmeddelandet efter 5 sekunder
    setTimeout(() => {
      setStatus(null);
    }, 5000);
    }
  };

  return (
    <section className="subscribe">
        <img src={notification} alt="notification" />
        <h4 id="subscribe-title">Subscribe to our newsletter to stay informed about latest updates</h4>
        <form onSubmit={handleSubmit}>
            
            <input type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} required />
            <button type="submit">Subscribe</button>
        </form>
        {/* Statusmeddelande som visas efter formuläret */}
      {status && (
        <p className={`status-message ${status === 'Thank you for subscribing!' ? 'success' : ''}`}>
          {status}
        </p>
      )}
    </section>
  )
}

export default Subscribe;
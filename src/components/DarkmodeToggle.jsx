import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  darkModeSwitch.addEventListener('change', () => {
    if(darkModeSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'on');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'off');
    }
  });

  useEffect(() => {
   const savedTheme = localStorage.setItem('theme')

   if(darkModeSwitch.checked) {
       document.documentElement.classList.add('dark');
       setIsDarkMode(true)
   } else {
       document.documentElement.classList.remove('dark');
       setIsDarkMode(false)
   }

   }, [])

  return (
    <div className="darkmode-toggle">
      <p>Dark Mode</p>
      <label className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={DarkModeToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle
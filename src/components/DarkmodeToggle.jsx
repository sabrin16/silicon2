import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  // När komponenten först laddas, hämta det sparade temat från localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode'); // Hämtar det sparade temat

    if (savedTheme === 'on') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else if (savedTheme === 'off') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
   }

    // Lyssna på förändringar i systemets tema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const themeChangeListener = (e) => {
      const prefersDark = e.matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    };

    // Lägg till event listener
    mediaQuery.addEventListener("change", themeChangeListener);

    // Städa upp när komponenten tas bort
    return () => {
      mediaQuery.removeEventListener("change", themeChangeListener);
    };
  }, []); 

  // Funktion för att hantera ändring av dark mode
  const handleToggle = (event) => {
    const isChecked = event.target.checked; // Kolla om checkboxen är ikryssad

    if (isChecked) {
      document.documentElement.classList.add('dark'); // Lägg till mörk tema
      localStorage.setItem('darkMode', 'on'); // Spara temat i localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Ta bort mörk tema
      localStorage.setItem('darkMode', 'off'); // Spara temat i localStorage
    }

    setIsDarkMode(isChecked); // Uppdatera tillståndet
  };

  return (
    <div className="darkmode-toggle">
      <p>Dark Mode</p>
      <label className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} /> {/* Använd vår funktion när ändring sker */}      
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
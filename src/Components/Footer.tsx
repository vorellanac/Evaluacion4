// src/Components/Footer.tsx  
import React from 'react';  
import './Footer.css';  

const Footer = () => {  
  const getCurrentDate = () => {  
    const currentDate = new Date();  
    return currentDate.toDateString();  
  };  

  return (  
    <footer className="footer">  
      <p>Gracias por visitarme, Fecha: <span className="date">{getCurrentDate()}</span></p>  
    </footer>  
  );  
};  

export default Footer;
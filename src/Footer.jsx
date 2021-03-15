import React from 'react' ;
import './App.css';

const Footer = () => {
    const yr = new Date().getFullYear() ;
  return (
    <>
    <footer background= '#777' text-align= 'center' padding= "5%"  >
    <p text-decoration="bold"> © Copyright { yr } MKM. All rights reserved. </p>
    </footer>
    </>
  );
}

export default Footer;
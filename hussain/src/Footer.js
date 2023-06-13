import React from 'react';
import './index.css'


 import { FaFacebookSquare } from "react-icons/fa";
 import { FaSkype } from "react-icons/fa";
 import { FaTwitterSquare } from "react-icons/fa";
 import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    
    <footer className="footer" style={{ }}>
      <div className="footer-content" style={{display: 'flex',justifyContent: 'space-between',flexWrap: 'wrap'}}>
        <div className="footer-section" style={{ flexBasis: '30%',marginBottom: '20px'}}>
          <h3>Contact Us</h3>
          <p>
           <h7> Phone # :  0309-8739098</h7>
           <br></br>
           <h8> Email :  AstraTech345@gmail.com</h8>
           <br></br>
           <h9> Address : Lahore , Mall Road</h9>
          </p>
        </div>
        <div className="footer-section"  style={{ flexBasis: '30%',marginBottom: '20px'}}>
          <h3>Quick Links</h3>
          <p>
            
            <a href="#" style={{color:'white',textDecoration:'none'}} ><i className="fa fa-facebook"><FaFacebookSquare  style={{color:'white'}} /></i>FaceBook</a>
            <br></br>
            <a href="#" style={{color:'white',textDecoration:'none'}} ><i className="fa fa-twitter"><FaTwitterSquare style={{color:'white'}} /></i>Twitter</a>
            <br></br>
            <a href="#" style={{color:'white',textDecoration:'none'}} ><i className="fa fa-instagram"><FaWhatsappSquare style={{color:'white'}} /></i>Instagram</a>
            <br></br>
            <a href="#" style={{color:'white',textDecoration:'none'}} ><i className="fa fa-linkedin"><FaSkype style={{color:'white'}} /></i>Skype</a> 

          </p>
        </div>
        <div className="footer-section"  style={{ flexBasis: '30%',marginBottom: '20px'}}>
          <h3>Follow Us</h3>
          <div className="social-icons" style={{display: 'flex',justifyContent: 'space-between',maxWidth: '150px',marginTop: '10px'}}>
           
            <a href="#"><i className="fa fa-facebook"><FaFacebookSquare style={{color:'white'}}   /></i></a>
            <a href="#"><i className="fa fa-twitter"><FaTwitterSquare style={{color:'white'}} /></i></a>
            <a href="#"><i className="fa fa-instagram"><FaWhatsappSquare style={{color:'white'}} /></i></a>
            <a href="#"><i className="fa fa-linkedin"><FaSkype style={{color:'white'}} /></i></a> 


          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ backgroundColor: 'black',padding: '10px',textAlign: 'center',fontSize: '12px'}}>
        <p style={{fontSize:'20px'}}>&copy; {new Date().getFullYear()} Asra technology .</p>
      </div>
    </footer>


    
    </>
  );
};




export default Footer;

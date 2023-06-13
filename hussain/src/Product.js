import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = () => {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" >
    
    <div>
          <img style={{height:'70px',width:'150px',marginLeft:'2%'}} src='https://www.scenerise.com/wp-content/uploads/2020/06/information-technology.jpg' />
        </div>
        <header style={{color:'black',fontFamily:'revert-layer',fontSize:'30px',marginLeft:'2%'}}> Astra<span style={{color:'Lightblue'}}> -Techno </span>  </header>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      
        <Nav  className="navbar" style={{marginLeft:'50%'}} >
          
          <NavLink   to="/"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}} >Home</NavLink>
          <NavLink to="/about" href="#about"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>About Us</NavLink>
          <NavLink to="/contact"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>Contact Us</NavLink>
          <NavLink to="/service"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>Service</NavLink>
        </Nav>

     
        
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Product;






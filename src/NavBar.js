import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
  

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
      
        <Nav  className="navbar" style={{marginLeft:'40%'}} >
          <ul style={{display:"flex",listStyleType:"none",flexDirection:'row'}}>
            <li><NavLink   to="/"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}} >Home</NavLink></li>
            <li><NavLink to="/about" href="#about"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>About Us</NavLink></li>
            <li><NavLink to="/contact"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>Contact Us</NavLink></li>
            <li><NavLink to="/service"  style={{color:'black',marginLeft:'20px',textDecoration:'none'}}>Service</NavLink></li>
            
            
    {isAuthenticated ? (
      <li>   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>
    ):(
      <li>  <button onClick={() => loginWithRedirect()}   style={{marginLeft:'15%',width:"70px",border:'none'}}>Log In</button></li>
    )

    }
          </ul>
          
          
  
        </Nav>

     
        
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar;






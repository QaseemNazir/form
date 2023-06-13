import React from 'react'
import "./index.css"
import Footer from './Footer'
import Cards from './Cards'


const Home = () => {
  return (
    <>

    <div className='Container'>
    <section>
        <div className='main_div'>
        <div className='div2' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',float:'right',marginRight:'25%',}}>
        <img src='https://www.pngkit.com/png/full/216-2161190_male-png.png' height={300} width={300} />
              

        </div>
             <header style={{fontSize:'30px',fontWeight:'bold',margin:'100px 100px'}}>
              Online Payment Made <span style={{color:'lightblue'}}> Easy For You </span>
              
              </header>
              <p style={{fontSize:'15px',fontFamily:'sans-serif',margin:'50px 50px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing abore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              
              <div>
              <button  style={{color:'lightblue',margin:'3px 60px',background:'white',border:'1px solid lightblue',width:'100px',borderRadius:'5%'}}>Get Started </button>
              </div>
        </div>


       
      </section>

    </div>

    <Cards />
    
    <Footer />
    </>

    

  )
}



export default Home

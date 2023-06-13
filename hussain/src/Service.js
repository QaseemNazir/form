import React from 'react'

const Service = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}> OUR SERVICES</h1>
    <div className='Main_ServiceCard'>
      <div className='All_ServiceCards' style={{height:'100px'}}>
        <div className='ServiceCard_1'>
             <img src='http://thestatetimes.com/wp-content/uploads/2018/02/infotech.jpg' height={200}  width={350} />
             <header style={{fontWeight:'bold',textAlign:'center',fontSize:'20px',fontFamily:'sans-serif'}}>Our Services</header>
             <p style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',fontFamily:'monospace'}}>Through Latest Technology</p>
             <h1 style={{fontSize:'25px',marginLeft:'1%',color:'lightblue'}}> Enjoy Our Services</h1>

        </div>

        <div className='ServiceCard_2'>
        <img src='https://technewuk.com/wp-content/uploads/2018/06/Benefits-of-Technology.jpg' height={200}  width={350} />
             <header style={{fontWeight:'bold',textAlign:'center',fontSize:'20px',fontFamily:'sans-serif'}}>Our Services</header>
             <p style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',fontFamily:'monospace'}}>Through Latest Technology</p>
             <h1 style={{fontSize:'25px',marginLeft:'1%',color:'lightblue'}}> Enjoy Our Services</h1>

        </div>

        <div className='ServiceCard_3'>
        <img  src='https://cdn.wallpapersafari.com/21/32/ZBpCX6.jpg' height={200}  width={350} style={{backgroundPosition:"100% 100%"}} />
             <header style={{fontWeight:'bold',textAlign:'center',fontSize:'20px',fontFamily:'sans-serif'}}>Through Latest Technology</header>
             <p style={{textAlign:'center',fontSize:'15px',fontWeight:'bold',fontFamily:'monospace'}}>Enjoy Our Services</p>
             <h1 style={{fontSize:'25px',marginLeft:'1%',color:'lightblue'}}> Enjoy Our Services</h1>
        </div>


      </div>
    </div>


    
   </>

   
  )
}

export default Service

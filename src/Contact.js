import React from 'react'
import './index.css'
import Footer from './Footer.js'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
     <h1 style={{marginTop:'4%',textAlign:'center'}}> Feel free to Contact Us</h1>


     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.840523872373!2d74.3189875748129!3d31.501067048096928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055f653840d3%3A0x41ec31c45b542850!2sBarkat%20Market!5e0!3m2!1sen!2s!4v1685879332415!5m2!1sen!2s"
        width="1320"
        height="450" 
        style={{border:'0',alignItems:'center',marginLeft:'1%'}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>




<ContactForm />

     <Footer />
    </>
  )
}

export default Contact

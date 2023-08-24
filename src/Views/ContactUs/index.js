import React, { useState } from "react";
import "./style.css";
import Footer from "../../Components/Footer";
import NavbarComp from "../../Components/Navbar";
import { sendMailReq } from "./api";
import { useNavigate } from "react-router-dom";




const ContactUs = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    message: '',
    email:'',
  })

  const { message, email } = formData

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const sendEmail = async(e) => {
    e.preventDefault()
    try {
      await sendMailReq(
        {
          type: "help",
          HTMLTemplate: `<h4>User Message: </h4>${message} <br/> <br/><b>Emailed By</b> <p>${email}</p>`
        }
      )
      console.log("email success")
      navigate('/')

      
    } catch (error) {
      console.log(error)
      
    }
   }

   const redirectToFaq = () => {
     navigate("/support")
   }

 

  return (
    <>
    <div className='support-navbar'>
        <NavbarComp />
    </div>
    <div className="contact-main-container">
      <div className="contact-section-one">
        <div className="wrapper-div">
          <div className="contact-first">
            <p className="bold-text">Contact Us</p>
            <p className="hero-text">
              We'd love to hear from you, <br /> help us serve you better.
            </p>
            <button className="faq-btn" onClick={redirectToFaq}>FAQs</button>
          </div>
        </div>
      </div>
      <div className="contact-section-two w-100">
        <p className="highlighted-text mb-4 ">Help</p>
        <p className="contact-bold-text mb-0">
          Contact our support team -
          <span className="contact-light-text"> help@nispand.com </span>
        </p>
        <p className="contact-bold-text">
          Get in touch for Partnership inquiries -
          <span className="contact-light-text"> info@nispand.com</span>
        </p>
        <div className="curve"></div>
      </div>
      <div className="row contact-section-three mt-4">
        <p className="highlighted-text mb-0">Write to us</p>
        <p className="contact-light-text">Have our support team contact you</p>
        <form  onSubmit={sendEmail}>
          <textarea
           onChange={handleInput}
           value={message}
            name="message"></textarea>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={email}
            placeholder="Your Email ID"
            className="email-input "
            
          />
          <button className=" submit-btn">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default ContactUs;

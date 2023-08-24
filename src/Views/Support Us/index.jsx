import React from 'react'
import DynamicButton from '../../Components/Dynamic Button'
import NavbarComp from '../../Components/Navbar'
import Accordion from '../../Components/Accordion'
import { FOOTER_LIST_BOTTOM } from '../Home/helper'
import { useNavigate } from 'react-router-dom'

const SupportUs = () => {

  const navigate = useNavigate()

  const redirectToContact = () => {
    navigate("/contact_us")
  }

  const redirectToPrivacy = () => {
    window.location.href='https://nispand.com/PrivacyPolicy.html'
  }

    return (
        <>
            <div className='support-navbar'>
                <NavbarComp />
            </div>
            <div className='support-img'>
                <div className='Support-search'>
                <h1 className='support-header'>Support</h1>
                <input type='text' placeholder='Search' className='support-input' />
                </div>
            </div>
            <div className='Dynamic-btn'>
                <DynamicButton link='' text={'Top FAQs'} />
                <DynamicButton handleClick={redirectToContact} text={'Contact Us'} />
                <DynamicButton link='' text={'Subscriptions & Billing'} />
                <DynamicButton link='' text={'Account Settings'} />
                <DynamicButton link='' text={'Troubleshooting'} />
                <DynamicButton link='' text={'Using Nispand'} />
                <DynamicButton link='' text={'Nispand Special Plans'} />
                <DynamicButton link='' text={'Meditation Tips'} />
                <DynamicButton link='' text={'Gift Nispand'} />
                <DynamicButton link='' text={'Nispand for Business'} />
                <DynamicButton link='' text={'The Science'} />
                <DynamicButton handleClick={redirectToPrivacy} text={'Privacy Policy'} />
            </div>
            <div className=' my-sm-5'>
                <Accordion />
            </div>
            <div>


    <div className="footer-bottom">
        <div className="custom-container">
          <div className="footer-bottom-left" id='set'>
            <ul>
              <li>Follow us :</li>
              {FOOTER_LIST_BOTTOM.leftSection.map((ele) => (
                <li>
                  <a href={ele.link}>
                    <i className={`fa-brands ${ele.name}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-bottom-right">
            <ul>
              {FOOTER_LIST_BOTTOM.rightSection.map((ele, i) => (
                <>
                  <li>
                    <a href={ele.url}>{ele.name}</a>
                  </li>
                  {i !== 3 && <li>|</li>}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>            </div>


        </>
    )
}

export default SupportUs
import React from 'react'
import logo from '../../assets/images/logo.png'
import "./contact.css"
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import gmail from '../../assets/images/gmail.png'
export const Contact = () => {
  return (
    <div className='contact'>
        <div className='top-logo'>
            <img src={logo} alt="" />
        </div>
        <div className="bottom-social">
            <div className='social-container'>
                <div className="social-item"><img src={instagram} alt="" /><p>@gotenstore1</p></div>
                <div className="social-item"><img src={gmail} alt="" /><p>gtnstore@gmail.com</p></div>
                <div className="social-item"><img src={facebook} alt="" /><p>@gotenstore</p></div>
            </div>
        </div>
    </div>
  )
}

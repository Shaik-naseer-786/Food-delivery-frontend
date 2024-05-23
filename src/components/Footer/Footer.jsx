import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
    <img src={assets.logo2} className="logo2" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit consequatur, minus ad deleniti sapiente sed commodi sit quia laborum iste!</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h1>GET IN TOUCH</h1>
            <ul>
                <li>+838138318</li>
                <li>contact@foodelivery.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &#169; FoodDelivery.com 	&#174; - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At FoodExpress, we believe every meal should be a moment of joy.
            Whether you're craving comfort food, exploring new flavors, or
            simply too busy to cook, we've got you covered. Our curated
            selection of restaurants, fast delivery, and real-time tracking
            ensure your food arrives fresh and on time. With a commitment to
            quality, hygiene, and customer satisfaction, we’re redefining
            convenience one bite at a time. Join thousands who trust FoodExpress
            to deliver happiness to their doorstep. Because great food isn’t
            just about taste—it’s about experience, connection, and care. Order
            now and savor the difference.
          </p>
          <div className="footer-socials-icons">
            <img src={assets.facebook_icon}alt="" />
            <img src={assets.twitter_icon}alt="" />
            <img src={assets.linkedin_icon}alt="" />
          </div>
        </div>

        <div className="footer-content-Center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>nethmalgeesara098@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr />
        <p className="footer-copyright">© 2025 FoodExpress. All rights reserved.</p>
    </div>
  );
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo-2.jpg"

const Footer = () => {
  return (
    <>
    <footer className="bg-[#2E6982] text-gray-300 py-4 px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="logo-section">
          <img src={logo} alt="Company Logo" className="rounded-full h-16 w-16 md:h-14 md:w-14 xl:h-20 xl:w-20 mr-2 " />
       
          <div className="social-links flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="useful-links">
          <h3 className="font-bold text-lg mb-4 text-white">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blogs" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="contact-us">
          <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
          <p className="mb-2">
          H No. 597, Govind Puri, New Delhi, Delhi 110019, India
          </p>
          <p className="mb-2">Phone: +91 9108536678</p>
          <p>Email: ngapublication@gmail.com</p>
        </div>

         <div className="useful-links">
          <h3 className="font-bold text-lg mb-4 text-white">EVENTS</h3>
          <ul className="space-y-2">
            <li>
              <a href="/neet" className="hover:text-white">
                NEET TEST SERIES
              </a>
            </li>
            <li>
              <a href="/jee" className="hover:text-white">
                JEE TEST SERIES
              </a>
            </li>
            <li>
              <a href="/kcet" className="hover:text-white">
                KCET TEST SERIES
              </a>
            </li>
            <li>
              <a href="/foundation" className="hover:text-white">
                FOUNDATION TEST SERIES
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t border-yellow-300 pt-4 text-center text-sm">
        <p>
          &copy; 2024 <span className="text-yellow-400">NGA  Publications.</span> All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;

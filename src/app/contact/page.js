// pages/Contact.js

import React from 'react';
import Link from 'next/link';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import './style.scss'
const Contact = () => {
  return (
    <main className="super_contact">
      <div className="main_contact1">
        <div className="main_contact2">
          <div className="contact_container1">
            <div className="contact_minicontainer1">
              <h2 className="text1">CLJ Photographer</h2>
              <span className="text2">267 Brown St.</span>
              <span className="text3">Mineola, NY 11501</span>
              <h2 className="text4">Contact Information</h2>
              <span className="text5">516-453-9331</span>
              <span className="text6">claudettegross@gmail.com</span>
              <h2 className="text7">Social Media</h2>
              <div className="contact_icon1">
                <span className="elementor-grid-item">
                  <div >
                    <Link href="https://twitter.com/?lang=en" className="name_link" target="_blank" rel="noopener noreferrer">
                      <i className="twitter"><AiFillTwitterCircle /></i> Twitter
                    </Link>
                  </div>
                </span>
                <span className="elementor-grid-item">
                  <div >
                    <Link href="https://www.instagram.com/" className="name_link" target="_blank" rel="noopener noreferrer">
                      <i className="insta"><FaInstagramSquare /></i> Instagram
                    </Link>
                  </div>
                </span>
                <span className="elementor-grid-item">
                  <div >
                    <Link href="https://www.facebook.com/" className="name_link" target="_blank" rel="noopener noreferrer">
                      <i className="fb"><FaFacebook /></i> Facebook
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="contact_container2">
            <div className="contact_minicontainer2">
              <h2 className="text8">Inquire About Your Session</h2>
              <div className="contact_container3">
                <div className="contact_minicontainer3">
                  <span className="text9">Name</span>
                  <input className="first_input" type="text" />
                  <div className="email">
                    <span className="text9">Email Address</span>
                    <input className="first_input" type="text" />
                  </div>
                  <div className="email">
                    <span className="text9">Phone Number</span>
                    <input className="first_input" type="number" />
                  </div>
                  <div className="email">
                    <div className="flex">
                      <span className="text9">Session Date Preference</span>
                      <small className="option">(OPTIONAL)</small>
                    </div>
                    <input className="second_input" type="date" />
                  </div>
                  <div className="email">
                    <div className="flex">
                      <span className="text9">What Kind Of Session?</span>
                      <small className="option">(OPTIONAL)</small>
                    </div>
                    <select className="select" name="select" id="age">
                      <option value="--Select--">--Select--</option>
                      <option value="Newborn">Newborn</option>
                      <option value="Maternity">Maternity</option>
                      <option value="Cake Smash(1st Birthday Photos)">Cake Smash(1st Birthday Photos)</option>
                      <option value="Family Portrait Photos">Family Portrait Photos</option>
                      <option value="Holiday Photos">Holiday Photos</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="email">
                    <div className="flex">
                      <span className="text9">Message</span>
                      <small className="option">(OPTIONAL)</small>
                    </div>
                    <input className="third_input" type="text" />
                  </div>
                </div>
                <div className="submit_button">
                  <button className="submit_contact">Submit</button>
                </div>
                <div className="last_contact">
                  <div className="lasttext">
                    This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

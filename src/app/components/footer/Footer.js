import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main_cjp">
      <div className="footer_min">
        <div className="footer_min_box_01">
          <img className="footer_logo" src="/logo.webp" alt="" />
        </div>
        <div className="footer_min_box_02">
          <div className="footer_min_boxes-1">
            <div className="footer_min_boxes_text_1">CLJ Photographer</div>
            <div className="footer_min_boxes_text_01">267 Brown St.</div>
            <div className="footer_min_boxes_text_02">Mineola, NY 11501</div>
          </div>
          <div className="footer_min_boxes-1">
            <div className="footer_min_boxes_text_1">Contact Information</div>
            <div className="footer_min_boxes_text_01">516-453-9331</div>
            <div className="footer_min_boxes_text_02">
              claudettegross@gmail.com
            </div>
          </div>
          <div className="footer_min_boxes-4">
            <div className="icon_circle">
              <CiTwitter />
            </div>
            <div className="icon_circle">
              <FaInstagram />
            </div>
            <div className="icon_circle">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_text_1">
          Copyright © 2024. All right reserved.
        </div>
        <div className="footer_bottom_text_2">Terms of Use</div>
      </div>
    </div>
  );
};

export default Footer;

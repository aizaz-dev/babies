import React from "react";
import "./style.scss";

const page = () => {
  return (
    <div className="contmain">
      <div className="main">
        <div className="wrapper">
          <p className="Newborn-photography">Newborn Photography</p>
          {/* parts-p  */}
          <div className="main-wrapper">
            {/* first section simply baby session */}
            <div className="simply-baby-session">
              <div className="name">Simply baby Session</div>
              <img src="/pic1.webp" alt="" className=" smiley" />
              <div className="doller">$199</div>
              <button className="btn"> View Portfolio</button>
              <button className="button">Book Session</button>
              <p className="response">What You Get</p>
              <img src="/pic4.jpg" alt="" className="profile-response" />
            </div>
            {/* seconf section signature session */}
            <div className="simply-baby-session">
              <div className="name">Signature Session</div>
              <img src="/pic2.webp" alt="" className=" sleepy" />
              <div className="doller">$499 | 4699</div>
              <button className="btn"> View Portfolio</button>
              <button className="button">Book Session</button>
              <p className="response">What You Get</p>
              <img src="/pic5.jpg" alt="" className="profile-response" />
            </div>
            {/* Third section luxe session */}
            <div className="simply-baby-session">
              <div className="name">Luxe Session</div>
              <img src="/pic3.webp" alt="" className=" sleep" />
              <div className="doller">$999 | 1299</div>
              <button className="btn"> View Portfolio</button>
              <button className="button">Book Session</button>
              <p className="response">What You Get</p>
              <img src="/pic6.jpg" alt="" className="profile-response" />
            </div>
            {/* parts-p end  */}
          </div>
          {/*wrapper end  */}
        </div>
        {/* main end */}
      </div>
      {/* different images section */}
      <div className="wrapper-p">
        <div className="wrapper">
          <div className=" wrap-p">
            <img src="/pic7.jpg" alt="" className=" wrap" />
            <img src="/pic8.jpg" alt="" className=" wrap" />
            <img src="/pic9.jpg" alt="" className=" wrap" />
            <img src="/pic10.jpg" alt="" className=" wrap" />
            <img src="/pic11.jpg" alt="" className=" wrap" />
            <img src="/pic12.jpg" alt="" className=" wrap" />
            <img src="/pic14.jpg" alt="" className=" wrap" />
            <img src="/pic15.jpg" alt="" className=" wrap" />
            <img src="/pic16.jpg" alt="" className=" wrap" />
            <img src="/pic17.jpg" alt="" className=" wrap" />
            <img src="/pic18.jpg" alt="" className=" wrap" />
            <img src="/pic19.jpg" alt="" className=" wrap" />
            <img src="/pic20.jpg" alt="" className=" wrap" />
            <img src="/pic21.jpg" alt="" className=" wrap" />
            <img src="/pic22.jpg" alt="" className=" wrap" />
            <img src="/pic23.jpg" alt="" className=" wrap" />
            <img src="/pic24.jpg" alt="" className=" wrap" />
            <img src="/pic25.jpg" alt="" className=" wrap" />
            <img src="/pic26.jpg" alt="" className=" wrap" />
            <img src="/pic27.jpg" alt="" className=" wrap" />
            <img src="/pic28.jpg" alt="" className=" wrap" />
            <img src="/pic29.jpg" alt="" className=" wrap" />
            <img src="/pic30.jpg" alt="" className=" wrap" />
            <img src="/pic31.jpg" alt="" className=" wrap" />
            <img src="/pic32.jpg" alt="" className=" wrap" />
            <img src="/pic33.jpg" alt="" className=" wrap" />
            <img src="/pic34.jpg" alt="" className=" wrap" />
            <img src="/pic35.jpg" alt="" className=" wrap" />
            <img src="/pic36.jpg" alt="" className=" wrap" />
            <img src="/pic37.jpg" alt="" className=" wrap" />
            <img src="/pic38.jpg" alt="" className=" wrap" />
            <img src="/pic39.jpg" alt="" className=" wrap" />
            <img src="/pic40.jpg" alt="" className=" wrap" />
            <img src="/pic41.jpg" alt="" className=" wrap" />
            <img src="/pic42.jpg" alt="" className=" wrap" />
            <img src="/pic43.jpg" alt="" className=" wrap" />
            <img src="/pic44.jpg" alt="" className=" wrap" />
            <img src="/pic45.jpg" alt="" className=" wrap" />
            <img src="/pic46.jpg" alt="" className=" wrap" />
            <img src="/pic47.jpg" alt="" className=" wrap" />
            <img src="/pic48.jpg" alt="" className=" wrap" />
            <img src="/pic49.jpg" alt="" className=" wrap" />
            <img src="/pic50.jpg" alt="" className=" wrap" />
            <img src="/pic51.jpg" alt="" className=" wrap" />
            <img src="/pic52.jpg" alt="" className=" wrap" />
          </div>
        </div>
      </div>
      {/* Contact us */}

      <div className="contact-p">
        <div className="contact-us">Contact Us</div>
        <div className="text-name">
          <div className="text">Name</div>
          <input type="text" placeholder="" className="input" />
          <div className="email">Email Address</div>
          <input type="email" placeholder="" className="input" />
          <div className="phone-number">Phone Number</div>
          <input type="text" placeholder="" className="input" />
          <div className="Session-date">
            Session Date Preference <span>(Optional)</span>
          </div>
          <input
            type="date"
            id="month"
            name="year"
            placeholder=""
            className="input"
          />
          <div className="Kinds-of-session">
            What Kinds of Session <span>(Optional)</span>
          </div>
          <select className="Select">
            <option className="option" value="Title">
              --Select--
            </option>
            <option className="option" value="New born">
              New born
            </option>
            <option className="option" value="Maternity">
              Maternity
            </option>
            <option className="option" value="Cake Smashe">
              Cake Smashe (1st Birthday Photos)
            </option>
            <option className="option" value="Family Portrai">
              Family Portrait Photos
            </option>
            <option className="option" value="Holidays Photos">
              Holidays Photos
            </option>
            <option className="option" value="Others">
              Others
            </option>
          </select>
          <div className="message">
            Message <span>(Optional)</span>
          </div>
          <input type="text" placeholder="" className="input-mess" />
          <div className="button">
            <button className="btn">Submit</button>
          </div>
          <div className="response">
            This form is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import "./style.scss";

const page = () => {
  return (
    <div>
      <div className="flex1">
        <div className="img1"></div>
        <div className="portion2">
          <div className="maternity">6 Month Baby Photos</div>
          <div className="pricing">Pricing starts at</div>
          <div className="price">$350/450/599

</div>
          <div className="view">view full family portrait portfolio</div>
          <div className="span1">Contact Us</div>
          <div className="next">Choice of 3 Different packages.
</div>
          <div className="next">What You Get</div>

          <div className="next">$350-30 minutes 7 images, 1 set</div>
          <div className="next">$450-1 hour 15 images, 2 sets</div>
          <div className="next">$599-one hour All images 35-40, 2 sets</div>
          <div className="next">
          Add parent or sibling photos $50 extra to any package-extra set
          </div>
          <div className="next">
          Edited images delivered on an online gallery. Access to high resolution downloading.
          </div>
          <div className="next">
          You may do whatever you’d like with the images – they are 100% yours.
          </div>
        </div>
      </div>
      <div className="main">
        <div className="centert">
          
          <div className="text8">Contact Us</div>
          <div className="flex2">
            <div className="div2">
              <div className="text9">First Name</div>
              <input className="input1" placeholder="Your first Name"></input>
            </div>
            <div className="div2">
              <div className="text9">Last Name</div>
              <input className="input1" placeholder="Last Name"></input>
            </div>
            <div className="div2">
              <div className="text9">Email Address</div>
              <input
                className="input1"
                placeholder="Your email address"
              ></input>
            </div>
            <div className="div2">
              <div className="text9">Phone Number</div>
              <input
                className="input1"
                placeholder="Your mobile or Phone number"
              ></input>
            </div>
            <div className="div2">
              <div className="text9">Date</div>
              <input className="input1" placeholder="Select Date"></input>
            </div>
            <div className="div2">
              <div className="text9">Referred By</div>
              <input className="input1" placeholder="Person name"></input>
            </div>
          </div>
          <div className="text8">Any additional comments or questions?</div>
          <input
            className="input2"
            placeholder="Your message(Optional)"
          ></input>

          {/* span */}
          <div className="span">
            <div className="session">Schedule your session</div>
          </div>
        </div>
      </div>
      <div className="flex3">
        <div className="box1">
          Price includes hour session and time and talent photographer. Session
          takes place in my home studio. You can choose from a 90 minute session
          with 2 prop set ups or 2 hour session with parent/sibling photos. I
          supply all the cute outfits and headbands. Once your session is over
          you and your hotographer will schedule a day and time for your photo
          reveal session.
        </div>
        <div className="box1">
          Price includes hour session and time and talent photographer. Session
          takes place in my home studio. You can choose from a 90 minute session
          with 2 prop set ups or 2 hour session with parent/sibling photos. I
          supply all the cute outfits and headbands. Once your session is over
          you and your hotographer will schedule a day and time for your photo
          reveal session.
        </div>
        <div className="box1">
          Price includes hour session and time and talent photographer. Session
          takes place in my home studio. You can choose from a 90 minute session
          with 2 prop set ups or 2 hour session with parent/sibling photos. I
          supply all the cute outfits and headbands. Once your session is over
          you and your hotographer will schedule a day and time for your photo
          reveal session.
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import "./style.scss";

const page = () => {
  return (
    <div>
      <div className="flex1">
        <div className="img1"></div>
        <div className="portion2">
          <div className="maternity">Family Photography</div>
          <div className="pricing">Pricing starts at</div>
          <div className="price">$599/$699</div>
          <div className="view">view full family portrait portfolio</div>
          <div className="span1">Contact Us</div>
          <div className="next">What You Get</div>
          <div className="next">1 hour session and 15 digital images $525</div>
          <div className="next">1 hour session 25 images $699</div>
          <div className="next">Gallery of 30-40 images to choose from</div>
          <div className="next">
            Done on location at a park or beach setting
          </div>
        </div>
      </div>
      <div className="main">
        <div className="centert">
          <div className="text3">
            When was the last time you had a professionally taken family photo?
            If you can’t remember, or if it’s been a few years, now is a great
            time have one done. Whether it’s for a holiday card, to celebrate
            Easter, or simply because you haven’t taken one to show off how
            everyone in the family has changed, now is a good of a time as
            there’s ever been.
            <br />
            There’s no limit to what we can do with family photography. If you
            haven’t yet, check out my portfolio to see some of my favorites from
            the past. Of course, I’d love to hear your own ideas for a family
            photography session. Every family is unique, and I want to capture
            this uniqueness within your own photos.
            <br />I typically service individuals from Long Island, Nassau
            County and Suffolk County region (although I’d love to have you come
            into the studio wherever you’re from). If you are not interested in
            studio work we can also visit one of our partner outdoor venues
            (parks mostly) to set up the right photo shoot for your unique
            needs.
            <br />
            Feel free to use the booking option built into the website, or you
            can email me, call me, or contact with through social media with any
            other questions you might have about my family (or other)
            photography services.
          </div>
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

import "./Professional.scss";

const Professional = () => {
  return (
    <div className="main-container">
      <div className="professional-container">
        <div className="professional-heading">
          Beautiful professional photos to <br />
          cherish for a lifetime
        </div>
        <div className="professional-wrapper">
          <div className="emily-photography">
            <div className="photography-name">Emily Photography</div>
            <div className="baby-img">
              <img
                src="./Family-Photography.webp"
                alt=""
                width="100%"
                height="330px"
              />
            </div>
            <div className="photography-price">S$499/$599</div>
            <div className="photography-details">What You Get</div>
            <div className="photography-details">Hour Session</div>
            <div className="photography-details">
              On location at a park or beach recommended by your photographer
            </div>
            <div className="photography-details">15 digital images $499</div>

            <div className="photography-details">25 images $599 </div>
            <div className="photography-details">
              Add a 6x6 heirloom album for $250 or 8x8 album for $350{" "}
            </div>
            <div className="photography-details">
              Add a 11x14 Canvas for $99
            </div>
            <div className="contact-us">Contact Us</div>
          </div>
          {/* milestone session */}
          <div className="milestone-session">
            <div className="milestone-name">Milestone Session</div>
            <div className="milestone-baby-img">
              <img
                src="./Milestone-Session.webp"
                alt=""
                width="100%"
                height="330px"
              />
            </div>
            <div className="milestone-photography-price">$299/$499</div>
            <div className="milestone-photography-details">What You Get</div>
            <div className="milestone-photography-details">
              60/30 minute session for 6,9 12 months, or any milestone you want
              to celebrate!
            </div>
            <div className="milestone-photography-details">
              2 unique sets and outfit changes
            </div>
            <div className="milestone-photography-details">
              Done in studio only.
            </div>
            <div className="milestone-photography-details">
              Add parent photos on for $50 and 2 additional images{" "}
            </div>
            <div className="milestone-photography-details">
              $399 15 images/$499 25images
            </div>
            <div className="milestone-contact-us">Contact Us</div>
          </div>
          {/* Mini/Holiday Sessions */}
          <div className="holiday-session">
            <div className="holiday-name">Mini/Holiday Sessions</div>
            <div className="holiday-baby-img">
              <img
                src="./Holiday-Sessions.webp"
                alt=""
                width="100%"
                height="330px"
              />
            </div>
            <div className="holiday-price">$249</div>
            <div className="holiday-details">What You Get</div>
            <div className="holiday-details">20 minutes</div>
            <div className="holiday-details">8 edited images</div>

            <div className="holiday-contact-us">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;

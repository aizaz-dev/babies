import "./BeachImageContainer.scss";

const BeachImageContainer = () => {
  return (
    <div className='beach-container'>
    <div className="img-container">
    <div className="beach-baby-img">
    <img src="./Holiday-Sessions.webp" alt="" width="100%" height="auto"/>
    </div>
    <div className="beach-photography-details">
    <div className="beach">
    Engagement
    </div>
    <div className="pricing">Pricing starts at </div>
    <div className="Rs">$575</div>

    <div className="Link">view full engagement photography portfolio</div>
    <div className="btn">Contact Us</div>
    <div className="beach-description">
    <div className="para">What You Get</div>
    <div className="para">One hour session</div>
    <div className="para">Includes 15 edited images</div>
    <div className="para">Includes Keepsake Box with 15 4x6 images from your session</div> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default BeachImageContainer
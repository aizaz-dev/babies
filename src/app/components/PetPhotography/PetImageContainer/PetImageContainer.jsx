import "./PetImageContainer.scss";

const PetImageContainer = () => {
  return (
    <div className='pet-image-container'>
<div className="img-container">
<div className="pet-baby-img">
<img src="/Holiday-Sessions.webp" alt="" width="100%" height="auto"/>
</div>
<div className="pet-photography-details">
<div className="pet">
Pet Photography
</div>
<div className="pricing">Pricing starts at </div>
<div className="Rs">$250</div>

<div className="btn">Contact Us</div>
<div className="pet-description">
  <div className="p">What You Get</div>
  <div className="p">90 minute or 2 hour session session</div>
  <div className="p">2-3 unique sets</div>
  <div className="p">Use of all the adorable outfits and accessories</div> 
  <div className="p">Products and digitals starting at $50</div>

</div>
</div>
</div>
    </div>
  )
}

export default PetImageContainer
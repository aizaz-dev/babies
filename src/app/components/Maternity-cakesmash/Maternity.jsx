import "./Maternity.scss";

const Maternity = () => {
  return (
    <div className="container">
        <div className="wrapper">
            {/* cake smash */}
            <div className="cake-smash">
            <div className="Heading">
            Cake Smash/ Birthday
            </div>
            <div className="baby-image">
            <img src="./Cake-Smash-Birthday.webp" alt="" width="100%" height="350px"/>
            </div>
            <div className="Price">
            Starting At $199            
            </div>
            <div className="smash-button">
                View Portfolio
            </div>

            <div className="smash-button">
                Book Session
            </div>
            <div className="details">
            <div className="text">What You Get</div>
            <div className="text">
            $199 Simple backdrop 5 edited images
            </div>
            <div className="text">
            $399 Just the Smash Includes 1 theme backdrop and 15 edited images.</div>
            <div className="text">
            $499 Signature Smash Includes 25 edited images 1 hour session. 2 backdrops </div>
            <div className="text">
            $699 Custom Smash, 35-40 edited images, more backdrops to choose from. 3 
            backdrops, bathtub photos included, parent photos    </div>
            <div className="text">Add bathtub photos onto any session for $40 and 2 additional images</div>
            <div className="text">Add 2 additional family photos $40</div>
            </div>
         

            </div>
              {/* maternity*/}
              <div className="cake-smash">
            <div className="Heading">
            Maternity
            </div>
            <div className="baby-image">
            <img src="./Maternity.webp" alt="" width="100%" height="350px"/>
            </div>
            <div className="Price">
            Starting at $299          
            </div>
            <div className="smash-button">
                View Portfolio
            </div>

            <div className="smash-button">
                Book Session
            </div>
            <div className="details">
            <div className="text">What You Get</div>
            <div className="text">
            30 minute studio session 5 edited images $299
            </div>
            <div className="text">
            1 hour session on location 20 digital images $550         </div>
            <div className="text">
            Free 11x14 canvas if you book a newborn session </div>
            </div>
           
           

            </div>
        </div>
    </div>
  )
}

export default Maternity




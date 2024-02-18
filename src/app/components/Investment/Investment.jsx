import "./Investment.scss";

const Investment = () => {
  return (
    <div className="Investment-container">
        <div className="investment-wrapper">
        <div className="investment-text">
            Investment
        </div>
        <div className="info-session">
            <div className="simply-baby-session">
                <div className="heading">
                Simply Baby Session
                </div>
                <div className="simply-baby-image">
                    <img src="./Simply-Baby.webp" alt="" width="100%" height="330px"/>
                </div>
                <div className="price">
                    $199
                </div>
                <div className="button">
                    View Portfolio
                </div>

                <div className="button">
                    Book Session
                </div>
                <div className="what-yoy-get">
                    What You Get
                </div>
                <div className="photography-info">
                    <img src="./simply.jpg" alt="" height="450px" width="350px"/>
                </div>
            </div>
            {/* signature-baby */}
            <div className="simply-baby-session">
                <div className="heading">
                Signature Session
                </div>
                <div className="simply-baby-image">
                    <img src="./Signature-Session.webp" alt="" width="100%" height="330px"/>
                </div>
                <div className="price">
                $499 | $699
                </div>
                <div className="button">
                    View Portfolio
                </div>

                <div className="button">
                    Book Session
                </div>
                <div className="what-yoy-get">
                    What You Get
                </div>
                <div className="photography-info">
                    <img src="./signature.jpg" alt="" height="450px" width="350px"/>
                </div>
            </div>
            {/* luxe baby */}
            <div className="simply-baby-session">
                <div className="heading">
                Luxe Session
                </div>
                <div className="simply-baby-image">
                    <img src="./Luxe-Session.webp" alt="" width="100%" height="330px"/>
                </div>
                <div className="price">
                $999 | $1299
                </div>
                <div className="button">
                    View Portfolio
                </div>

                <div className="button">
                    Book Session
                </div>
                <div className="what-yoy-get">
                    What You Get
                </div>
                <div className="photography-info">
                    <img src="./luxe.jpg" alt="" height="450px" width="350px"/>
                </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Investment
import "./MilestoneContactUS.scss"

const MilestoneContactUS = () => {
  return (
    <div className='con'>
        <div className="milestone-container">
        <div className="milestone">Contact Us</div>        
          <div className="name">
          <div className="f-name">
          <label for="fname" className="label">First name</label>         
          <input type="text" id="fname" name="fname" placeholder="Your First name" className="first-name"/>
          </div>
          <div className="l-name">
          <label for="lname" className="label">Last name</label>         
          <input type="text" id="lname" name="lname" placeholder=" Last name" className="last-name"/>
          </div>         
          </div>

          <div className="address">
          <div className="mail">
          <label for="fname" className="label">Email Address</label>         
          <input type="text" id="mail" name="mail" placeholder="Your Email Address" className="email"/>
          </div>
          <div className="number">
          <label for="number" className="label">Phone Number</label>         
          <input type="text" id="number" name="number" placeholder="Your mobile or phone number" className="phone-number"/>
          </div>         
          </div>

          <div className="refrence">
          <div className="date">
          <label for="date" className="label">Phone Number</label>         
          <input type="text" id="date" name="date" placeholder="Select Date" className="Date"/>
          </div>         
          <div className="refrence-by">
          <label for="refrence-by" className="label">Phone Number</label>         
          <input type="text" id="refrence-by" name="refrence-by" placeholder="Person Name" className="person"/>
          </div>
         
          </div>
        
        <div className="comments">
         Any additional comments or questions?
        </div>
        <input type="text" id="message" name="your-message" placeholder="Your message (optional)" className="message"/>
        
        <div className="schedule-session">
        <div className="schedule-btn">
          Schedule your session
        </div>
        </div>     
      </div> 
    </div>
  )
}

export default MilestoneContactUS
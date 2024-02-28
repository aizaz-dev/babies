import Testimonials from "@/app/components/cardslide/CardSlide";
import "./style.scss";

const page = () => {
  return (
    <div>
      
      {/* first part pricelist */}
      <div className="prize-list">
        <div className="cake-smashe">
          <div className="flex">
            <img src="/pricelist.jpg" alt="" className=" side-bar-pic" />
            <div className="flex1">
              <p className="LONG-ISLAND">
                $199 LONG ISLAND CAKE SMASH PHOTOGRAPHER
              </p>
              <img src="/boy.jpg" alt="" className="boy" />
            </div>
          </div>
          {/* second part photographer */}
          <div className=" photographer-p">
            <div className="photographer-wrapper">
              <p className="Claudette-Gross">
                Meet The Photographer Claudette Gross
              </p>
              <img src="/image2.jpeg" alt="" className="photographer" />
              <p className=" Jeff">
                We are Jeff and Claudette Gross, a devoted cake smash
                photography duo based in Mineola. With a tender touch and a keen
                eye for moments, we have lovingly captured the earliest days of
                over 500 precious cake smashes on Long Island. We eagerly
                anticipate meeting you soon, ready to create heartwarming,
                lifelong memories together.
              </p>
            </div>
            {/* RESERVE YOUR SESSION */}
            <div className="photographer-wrapper1">
              <p className="reserved-seesion">
                RESERVE YOUR <br /> SESSION
              </p>
              <p className="limited-spot">LIMITED SPOTS AVAILABLE</p>
              <div className="option">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  className="email"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone Number"
                  className="phone-number"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" Your Message"
                  className="message"
                />
              </div>
              <div className="button">
                <button className="btn">S U B M I T</button>
              </div>
            </div>
            {/* second part photographer end */}
          </div>
          {/* cake-smashe end */}
        </div>
        {/* prize-list */}
      </div>
      {/* Testimonials    */}
      {/* Not Responsive */}
      <div className="Testimonials-p">
        <div className="testimonial">TESTIMONIALS</div>
        <div className="FLEX">
          <img src="/icon.png" alt="" className="icon" />
          <img src="/icon.png" alt="" className="icon" />
          <img src="/icon.png" alt="" className="icon" />
          <img src="/icon.png" alt="" className="icon" />
          <img src="/icon.png" alt="" className="icon" />
          <div className="Review-on-google">5 Star Reviews on Google</div>
        </div>

        <Testimonials/>
        {/* {/* Testimonials  end   *}                */}
      </div>
      {/* photography baby girl */}
      <div className="photo-p">
        <div className="image-p">
          <div className="baby-girl">
            <img src="/babygirl.jpg" alt="" className="imgbga"/>
          </div>
        </div>
        <div className="text-p">
          <div className="text1">
            <div className="text">
              Here Is What You Get With CLJ CAKE SMASH PHOTOGRAPHY
            </div>
          </div>
        </div>
        {/* parent (clock+calander+emoji) */}
        <div className="Wrapper-p">
          {/* clock */}
          <div className="wrap1">
            <div className="item-p">
              <div className=" item-1">
                <img src="/clock.svg" alt="" className="clock" />
              </div>

              <p className="para">Ultra Fast 24 HourTurnaround on Photos</p>
            </div>
          </div>
          {/* calander+emoji-p */}
          <div className="wrap2">
            {/* emoji */}
            <div className="item-p1">
              <div className="item-2">
                <img src="/emoji.svg" alt="" className="emoji" />
              </div>
              <p className="para1">
                Accommodations for Newborns <span>Up To 8 Weeks Old</span>
              </p>
            </div>
            {/* calander */}

            <div className="item-p2">
              <div className="item-3">
                <img src="/calander.svg" alt="" className="calander" />
              </div>
              <p className="para2">
                Last Minute Booking <span>Accommodations</span>
              </p>
            </div>
          </div>
        </div>
        {/* baby girl photo end */}
      </div>
      {/* Welcome part */}
      <div className="welcome-p">
        <div className="welcome-wrap">
          <div className="wrapper">
            <div>
              <h1 className="welcome">
                <p>Welcome to</p>
              </h1>
              <h2 className="CJI-wrap">WELCOME TO CLJ PHOTOGRAPHY</h2>
              <h4 className="cake">Long Island Cake Smash Photography</h4>
            </div>
          </div>
        </div>
        {/* paragraphs */}
        <div className="paragraphs-p">
          <div className="paragraphs">
            <p className="smash-photo">
              CLJ photography is a cake smash photographer located in Mineola
              New York here in the heart of Long Island. my name is Claudette
              and I’m the founder of CLJ Photography, and I have been
              photographing cake smash sessions for more than 10 years.
            </p>
            <p className="smash-photo">
              In these 10 years I have photographed more than 300 cake smashes,
              and I have loved each and every one of them. The cake smash photo
              shoot is some of the most fun you’ll have at a photo shoot in your
              life. When you see the look on your 1-year-old’s face as they get
              to smash and eat that cake it will melt your heart.
            </p>
            <p className="smash-photo">
              Each and every time I do a cake smash photo session, I personally
              enjoy the smiles on each of the parents and/or grandparents faces
              as they watch their sweet and wonderful child or grandchild smash
              that cake and get super dirty in the process.
            </p>
            <h5 className="cake">The Magic of Cake Smash Photography</h5>
            <p className="smash-photo">
              A cake smash is a delightful and fun way to celebrate your child’s
              first birthday. Our cake smash sessions are done in our Mineola
              cake smash photography studio. The studio is set up perfectly just
              for your session, for your color scheme, and for your other
              preferences.
            </p>
            <p className="smash-photo">
              Before your session, we will have a conversation and discuss all
              the details of your photo shoot. The details range from outfit
              choices, to cake color choices, to backdrops, and of course some
              other decorations as well. You will know every single detail about
              your session, what to expect, and how many photos you will expect
              to have edited from your session, all before you walk in the
              studio.
            </p>
            <h6 className="cake">
              Why Choose CLJ Photography for Your Cake Smash Session?
            </h6>
            <p className="smash-photo">
              We also offer personalized themes, and other accommodations that
              will make your shoot uniquely you..
            </p>
            <p className="smash-photo">
              As for you, the parent you can just sit back relax and enjoy the
              show – literally!
            </p>
            <p className="smash-photo">
              I have more than 10 years of cake smash photography experience.
              having worked with hundreds of children, I can Ensure that you
              will have a safe, fun, enjoyable experience here at my cake smash
              studio in Mineola.
            </p>
            <p className="smash-photo">
              Our editing process is natural and captures and maintains the
              Beauty and the essence of the photo as it was shot at the moment
              of the photoshoot. The photos you receive will truly reflect your
              wonderful in-studio memories.
            </p>
            <p className="smash-photo">
              At CLJ photography on Long island, we’re here to capture the
              sweetest moments of your child’s Life first big milestone with our
              specialized cake smash photography. it would be our pleasure to
              help you immortalize the special time with photos the radiate joy
              laughter and the spirit of what it means to be a child. contact us
              today to book your cake smash session and let’s create Timeless
              memories together.
            </p>
            <p className="cake">
              Fill out the contact form below and let’s discuss your soon to be
              Unforgettable cake smash photography experience here at CLJ
              photography.
            </p>
            <p className="cake">
              Ready to capture the magic of your child’s first birthday?{" "}
            </p>
          </div>
        </div>
      </div>
      {/* first birthday cake smash */}
      <div className="first-smash">
        <div className="cover">
          <div className="boy-p">
            <img src="/boy1.jpg" alt="" className="boy-image" />
          </div>
          <div className="girl-p">
            <img src="/girl.jpg" alt="" className="girl-image" />
          </div>
        </div>
        {/* flower image */}
        <div className="flex">
          <div className="flower-p">
            <div className="flex1">
              <h1 className="Celebration">Sweet Celebration</h1>
              <h2 className="birthday-cake">
                FIRST <br /> BIRTHDAY CAKE <br /> SMASH:
              </h2>
              <h3 className="frolics">
                Embrace the fun and frolics of turning one, with photos you’ll
                adore forever.
              </h3>
              <button className="btn">CONTACT NOW</button>
            </div>
          </div>
        </div>

        {/* first birthday cake smash end */}
      </div>
      {/*Studio session  */}
      <div className="images-wrap">
        {/* studio session1 paragraph part */}
        <div className="studio-session1">
          <p className="studio-para1">
            STUDIO <br /> SESSIONS:
          </p>
          <p className="studio-para2">
            Rest and revel as our studio transforms into a <br /> haven of joy
            for you and your little one.
          </p>
          <button className="btn">CONTACT NOW</button>
        </div>
        {/* studio session2 images part */}
        <div className="studio-session2">
          <div className="images">
            <div className="image1">
              <img src="/babyqueen.jpg" alt="" className="baby-wrap" />
            </div>
            <div className="image2">
              <img src="/babyqueen2.jpg" alt="" className="queen-wrap" />
            </div>
          </div>
        </div>
        {/*Studio session end  */}
      </div>
      {/* Moments */}
      <div className="flex-p">
        <div className="flex1">
          <h1>PROMISE OF UNFORGETTABLE</h1>
          <h2>M O M E N T S</h2>
          <div data-aos="zoom-in">
            <button className="btn">BOOK YOUR MILSTONE NOW</button>
          </div>
          <div className="flex2">
            <div className="cake-image1">
              <img src="/cake.jpg" alt="" className="jpg" />
            </div>
            <div className="cake-image2">
              <img src="/babygirl2.jpg" alt="" className="jpg1" />
            </div>
            <div className="cake-image3">
              <img src="/cakee.jpg" alt="" className="jpg2" />
            </div>
          </div>
        </div>
      </div>
      {/* Moments end */}
      {/* Gallery of joy */}
      <div className="item">
        <p className="Gallery">GALLERY OF JOY</p>
        <div className="item1">
          <div className="image1">
            <img src="/cakish.jpg" alt="" className="cakish" />
          </div>

          <div className="image2">
            <img src="/crown.jpg" alt="" className="crown" />
          </div>

          <div className="image3">
            <img src="/girl.jpg" alt="" className="baby-girl" />
          </div>

          <div className="image4">
            <img src="/cutipie.jpg" alt="" className="crown1" />
          </div>

          <div className="image5">
            <img src="/babygirl.jpg" alt="" className="crown2" />
          </div>

          <div className="image6">
            <img src="/foody.jpg" alt="" className="crown3" />
          </div>

          <div className="image7">
            <img src="/bg-boy.jpg" alt="" className="crown4" />
          </div>

          <div className="image9">
            <img src="/queen.jpg" alt="" className="crown5" />
          </div>

          <div className="image10">
            <img src="/cakee.jpg" alt="" className="crown6" />
          </div>

          <div className="image11">
            <img src="/smiley.jpg" alt="" className="crown7" />
          </div>

          <div className="image12">
            <img src="/smiley2.jpg" alt="" className="crown8" />
          </div>

          <div className="image13">
            <img src="/boy.jpg" alt="" className="crown9" />
          </div>
        </div>
      </div>
      {/* Gallery of joy end */}
      {/* FAQS */}
      {/* <div className="faqs-wrap">
        <p className="FAQ">FAQ</p>
        <div className="select-p">
          <select className="Select">
            <option className="option" value="Title">
              When is the best time to schedule a cake smash photo session?
            </option>
            <option className="option" value="New born">
              It’s ideal to schedule the cake smash session a few weeks before
              your child’s first birthday. This ensures that you’ll <br />{" "}
            </option>
            <option className="option" value="New born">
              {" "}
              <br /> have the photos ready in time if you want to use them for
              birthday invitations or displays at their party.
            </option>
          </select>
        </div>

        <div className="select-p1">
          <select className="Select1">
            <option className="option1" value="Title">
              Do I need to bring a cake or outfits for the session?
            </option>
            <option className="option1" value="New born">
              You’re welcome to bring a cake and outfits that match your desired
              theme. However, we can also provide a list of <br />{" "}
            </option>
            <option className="option1" value="New born">
              {" "}
              recommended bakeries and suggestions for outfits if you need. Our
              studio has a collection of props and
            </option>
            <option className="option1" value="New born">
              {" "}
              accessories to complement the shoot, but personal touches always
              make the photos more special.
            </option>
          </select>
        </div>

        <div className="select-p2">
          <select className="Select2">
            <option className="option2" value="Title">
              What should parents wear to the photo session?
            </option>
            <option className="option2" value="New born">
              We suggest wearing colors that complement your child’s outfit or
              the theme of the cake smash. Neutral tones{" "}
            </option>
            <option className="option2" value="New born">
              {" "}
              work well as they don’t distract from the main focus – your
              child’s big moment. If you’d like to be a part of some
            </option>
            <option className="option2" value="New born">
              {" "}
              shots, consider coordinating with your child for a harmonious
              look.
            </option>
          </select>
        </div>

        <div className="select-p3">
          <select className="Select3">
            <option className="option3" value="Title">
              How long after the session will I receive my images?
            </option>
            <option className="option3" value="New born">
              viewing and selection within 2-3 weeks. We understand the
              excitement of reliving those moments and ensure{" "}
            </option>
            <option className="option3" value="New born">
              {" "}
              timely delivery while maintaining the highest quality..
            </option>
          </select>
        </div>
      </div> */}
      {/* book you Sesion today */}
      <div className="background-image">
        <div className="item">
          <div className="photographer-wrapper1">
            <p className="reserved-seesion">
              BOOK YOUR <br />
              SESSION TODAY
            </p>
            <div className="option">
              <input
                type="text"
                name=""
                id=""
                placeholder="FirstName"
                className="Name"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="LastName"
                className="Name"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className="email"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone Number"
                className="phone-number"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Preferred Date of Session"
                className="message"
              />
            </div>
            <div className="btn-p">
              <input type="submit" value="Send" className="btn" />
            </div>
          </div>
        </div>
      </div>
      {/*last image  */}
      <div className="last-wrap">
        <img src="/pricelist.jpg" alt="" className="pricelist" />
      </div>
    </div>
  );
};

export default page;

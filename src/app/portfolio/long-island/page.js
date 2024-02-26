import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { SlEmotsmile } from "react-icons/sl";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoCaretForwardSharp } from "react-icons/io5";
// import FAQComponent from "@/app/_components/Footer/Faq/page";
import "./style.scss";
import FAQComponent from "@/app/components/Faq/page";
const page = () => {
  return (
    <main>

      <div className="long_island_main_head">
        {/* <div className="long_island_min_head">
          <img className="long_island_logo" src="/logo.webp" alt="logo" />
          <div className="long_island_head_call_main">
            <div className="long_island_call_min_1">
              CALL TO MAKE AN APPOINTMENT
            </div>
            <div className="long_island_call_min_2">
              <FaPhoneAlt size={30} color="silver" />
              516-453-9331
            </div>
          </div>
        </div> */}
        <div className="long_island_main_head_new">
          <div className="long_island_main_head_new_icon">
            <FaPhoneAlt size={30} color="black" />
          </div>
          <div className="long_island_main_head_new_text">CALL516-453-9331</div>
        </div>
      </div>
      <div className="fullmain">
        <div className="long_island_main_body">
          <div className="long_island_main_body_max">
            <div className="long_island_main_body_min_1">
              <img
                className="long_island_main_body_min_001"
                src="/pricelist.jpg"
                alt=""
              />
            </div>

            <div className="long_island_main_body_min_2">
              <div className="long_island_main_body_min_2_01">
                $199 LONG ISLAND CAKE SMASH PHOTOGRAPHER
              </div>
              <img
                className="long_island_main_body_min_2_02"
                src="/pricelist_1.jpg"
                alt=""
              />
            </div>
          </div>

          {/* next component  */}
          <div className="meet_photo_main">
            <div className="meet_photo_min_1">
              <div className="meet_photo_min_1_001">
                Meet The Photographer Claudette Gross
              </div>
              <div className="meet_photo_min_1_002">
                <img
                  className="meet_photo_min_1_002"
                  src="/solo.jpeg"
                  alt="solo"
                />
              </div>
              <div className="meet_photo_min_1_003">
                We are Jeff and Claudette Gross, a devoted cake smash
                photography duo based in Mineola. With a tender touch and a keen
                eye for moments, we have lovingly captured the earliest days of
                over 500 precious cake smashes on Long Island. We eagerly
                anticipate meeting you soon, ready to create heartwarming,
                lifelong memories together.
              </div>
            </div>
            <div className="meet_photo_min_2">
              <div className="meet_photo_min_2_text">RESERVE YOUR SESSION</div>
              <div className="meet_photo_min_2_text_2">
                LIMITED SPOTS AVAILABLE
              </div>
              <form className="meet_photo_min_2_form">
                <input
                  className="meet_photo_min_2_form_text"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="meet_photo_min_2_form_email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="meet_photo_min_2_form_phone"
                  type="tel"
                  name=""
                  id=""
                  placeholder="Phone Number"
                />
                <input
                  className="meet_photo_min_2_form_message"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Message"
                />
              </form>
              <button className="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      {/* next component */}
      <div className="testinomial_main">
        <div className="testinomial_min">
          <div className="testinomial_min_text">TESTINOMIALS</div>
          <div className="testinomial_min_text_2">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />5 Star Reviews on Google
          </div>
          <div className="testinomial_min_text_3">
            {/* <h1>Slider..</h1> */}
          </div>
        </div>
      </div>
      {/* Next component */}
      <div className="clj_main">
        <div className="clj_min">
          <div className="clj_min_image_half_round">
            <img
              className="clj_min_image_half_round_image"
              src="/clj_01.jpg"
              alt=""
            />
          </div>
          <div className="clj_min_text">
            Here Is What You Get With CLJ <br /> CAKE SMASH PHOTOGRAPHY
          </div>
        </div>
        <div className="clj_min_boxes_main">
          <div className="clj_min_boxes_main_maion_min">
            <div className="clj_min_boxes_min_1">
              <div className="clj_min_boxes_min_1_box_clock">
                <div className="clj_min_boxes_min_1_box_clock_icon">
                  <CiClock2 size={80} color="#696969" />
                </div>
                <div className="clj_min_boxes_min_1_box_clock_text">
                  Ultra Fast 24 HourTurnaround on Photos
                </div>
              </div>
            </div>
            <div className="clj_min_boxes_min_2">
              <div className="clj_min_boxes_min_2_01">
                <div className="clj_min_boxes_min_1_box_clock">
                  <div className="clj_min_boxes_min_1_box_clock_icon">
                    <SlEmotsmile size={80} color="#696969" />
                  </div>
                  <div className="clj_min_boxes_min_1_box_clock_text">
                    Accommodations for Newborns Up To 8 Weeks Old
                  </div>
                </div>
              </div>
              <div className="clj_min_boxes_min_2_02">
                <div className="clj_min_boxes_min_1_box_clock">
                  <div className="clj_min_boxes_min_1_box_clock_icon">
                    <MdOutlineCalendarMonth size={80} color="#696969" />
                  </div>
                  <div className="clj_min_boxes_min_1_box_clock_text">
                    Last Minute Booking <br /> Accommodations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Next  */}
        <div className="super_home">
          <div className="main_home">
            <div className="p">Welcome to</div>
            <h1 className="photography">WELCOME TO CLJ PHOTOGRAPHY</h1>
            <h3 className="photography_1">
              Long Island Cake Smash Photography
            </h3>
          </div>
          <div className="mainhome_2">
            <p className="photography_2">
              CLJ photography is a cake smash photographer located in Mineola
              New York here in the heart of Long Island. my name is Claudette
              and I&rsquo;m the founder of CLJ Photography, and I have been
              photographing cake smash sessions for more than 10 years.
            </p>
            <p className="photography_2">
              In these 10 years I have photographed more than 300 cake smashes,
              and I have loved each and every one of them. The cake smash photo
              shoot is some of the most fun you&rsquo;ll have at a photo shoot
              in your life. When you see the look on your 1-year-old&rsquo;s
              face as they get to smash and eat that cake it will melt your
              heart.
            </p>
            <p className="photography_2">
              Each and every time I do a cake smash photo session, I personally
              enjoy the smiles on each of the parents and&#47;or grandparents
              faces as they watch their sweet and wonderful child or grandchild
              smash that cake and get super dirty in the process.
            </p>
            <p className="photography_3">The Magic of Cake Smash Photography</p>
            <p className="photography_4">
              A cake smash is a delightful and fun way to celebrate your
              child&rsquo;s first birthday. Our cake smash sessions are done in
              our Mineola cake smash photography studio. The studio is set up
              perfectly just for your session, for your color scheme, and for
              your other preferences.
            </p>
            <p className="photography_4">
              Before your session, we will have a conversation and discuss all
              the details of your photo shoot. The details range from outfit
              choices, to cake color choices, to backdrops, and of course some
              other decorations as well. You will know every single detail about
              your session, what to expect, and how many photos you will expect
              to have edited from your session, all before you walk in the
              studio.
            </p>
            <p className="photography_3">
              Why Choose CLJ Photography for Your Cake Smash Session?
            </p>
            <p className="photography_4">
              I have more than 10 years of cake smash photography experience.
              having worked with hundreds of children, I can Ensure that you
              will have a safe, fun, enjoyable experience here at my cake smash
              studio in Mineola.
            </p>
            <p className="photography_4">
              We also offer personalized themes, and other accommodations that
              will make your shoot uniquely you..
            </p>
            <p className="photography_4">
              Our editing process is natural and captures and maintains the
              Beauty and the essence of the photo as it was shot at the moment
              of the photoshoot. The photos you receive will truly reflect your
              wonderful in-studio memories.
            </p>
            <p className="photography_4">
              As for you, the parent you can just sit back relax and enjoy the
              show &ndash; literally!
            </p>
            <p className="photography_4">
              At CLJ photography on Long island, we&rsquo;re here to capture the
              sweetest moments of your child&rsquo;s Life first big milestone
              with our specialized cake smash photography. it would be our
              pleasure to help you immortalize the special time with photos the
              radiate joy laughter and the spirit of what it means to be a
              child. contact us today to book your cake smash session and
              let&rsquo;s create Timeless memories together.
            </p>
            <p className="photography_3">
              Ready to capture the magic of your child&rsquo;s first birthday?
            </p>
            <p className="photography_3">
              Fill out the contact form below and let&rsquo;s discuss your soon
              to be Unforgettable cake smash photography experience here at CLJ
              photography.
            </p>
          </div>
        </div>

        {/* Next Component */}
        <div className="sweet_celebration_main">
          <div className="sweet_celebration_min">
            <div className="sweet_celebration_min_01">
              <div className="sweet_celebrations_image_main">
                <img
                  className="sweet_celebrations_image_main_1"
                  src="/main_01.jpg"
                  alt=""
                />
                <div className="sweet_celebrations_image_main_2">
                  <img
                    className="sweet_celebrations_image_main_02"
                    src="/pos_02.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="sweet_celebration_min_02">
              <div className="sweet_celebration_min_02_bgc"></div>
              <div className="sweet_celebration_min_02_text_1">
                Sweet Celebrations
              </div>
              <div className="sweet_celebration_min_02_text_2">
                FIRST BIRTHDAY CAKE SMASH:
              </div>
              <div className="sweet_celebration_min_02_text_3">
                Embrace the fun and frolics of turning one, with photos you
                &rsquo;ll adore forever.
              </div>
              <div className="sweet_main">
                <button className="sweet_button">CONTACT NOW</button>
              </div>
            </div>
          </div>
        </div>
        {/* Next Component */}
        <div className="sweet_celebration_main_02">
          <div className="sweet_celebration_min_02">
            <div className="sweet_celebration_min_01_02">
              <div className="sweet_celebrations_image_main_02">
                <img
                  className="sweet_celebrations_image_main_1_02"
                  src="/po_02.jpg"
                  alt=""
                />
                <div className="sweet_celebrations_image_main_2_02">
                  <img
                    className="sweet_celebrations_image_main_02_02"
                    src="/poo_02.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="sweet_celebration_min_02_02">
              {/* <div className="sweet_celebration_min_02_bgc_02"></div> */}
              {/* <div className="sweet_celebration_min_02_text_1_02">
                Sweet Celebrations
              </div> */}
              <div className="sweet_celebration_min_02_text_2_02">
                STUDIO SESSIONS:
              </div>
              <div className="sweet_celebration_min_02_text_3_02">
                Rest and revel as our studio transforms into a haven of joy for
                you and your little one.
              </div>
              <div className="sweet_main_02">
                <button className="sweet_button_02">CONTACT NOW</button>
              </div>
            </div>
          </div>
        </div>
        {/* Next Component */}
        <div className="promise_moment_main">
          <div className="promise_moment_min">
            <div className="promise_moment_min_text_01">
              PROMISE OF UNFORGETTABLE
            </div>
            <div className="promise_moment_min_text_02">MOMENTS</div>
            <div className="promise_moment_min_text_03">
              <button className="promise_moment_min_text_button">
                BOOK YOUR MILESTONE NOW
              </button>
            </div>
            <div className="promise_moment_min_small_round_main">
              <div className="promise_moment_min_small_round_min_1">
                <img
                  className="promise_moment_min_small_round_min_1_image"
                  src="/round_1.jpg"
                  alt=""
                />
              </div>
              <div className="promise_moment_min_small_round_min_2">
                <img
                  className="promise_moment_min_small_round_min_2_image"
                  src="/round_2.jpg"
                  alt=""
                />
              </div>
              <div className="promise_moment_min_small_round_min_3">
                <img
                  className="promise_moment_min_small_round_min_3_image"
                  src="/round_3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Next component */}
        <div className="gallery_main">
          <div className="gallery_min">
            <div className="gallery_min_text">GALLERY OF JOY</div>
            <div className="gallery_min_gallery">
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_01.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_02.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_03.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_04.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_05.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_06.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_07.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_08.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_09.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_10.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_11.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_min_gallery_1">
                <img
                  className="gallery_min_gallery_1_img_01"
                  src="/grid_12.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Next Component */}
        <div className="faq_main">
          <div className="faq_min">
            <div className="faq_min_text">FAQ</div>
            <FAQComponent />
          </div>
        </div>
        {/* Next Component */}
        <div className="book_your_session_main">
          <div className="book_your_session_min">
            <div className="book_your_session_min_today_main">
              <div className="book_your_session_min_today_main_text">
                BOOK YOUR SESSION TODAY
              </div>
              <div className="book_your_session_min_today_main_form_01">
                <form className="form_001">
                  <input
                    className="fname"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                  <input
                    className="lname"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </form>
              </div>
              <div className="book_your_session_min_today_main_form_01">
                <form className="form_001">
                  <input
                    className="fname"
                    type="tel"
                    name=""
                    id=""
                    placeholder="Phone Number"
                  />
                  <input
                    className="lname"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                </form>
              </div>
              <div className="book_your_session_min_today_main_form_02">
                <input
                  className="date_session"
                  type="text"
                  name=""
                  id=""
                  placeholder="Preffered Date of Session"
                />
              </div>
              <div className="book_your_session_min_today_main_button_div">
                <button className="book_your_session_min_today_main_button">
                  SEND <IoCaretForwardSharp />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Next Component */}
        <div className="price_list_main_pic">
          <div className="price_list_min_pic">
            <img
              className="price_list_min_pic_pic"
              src="/pricelist_02.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

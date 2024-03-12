'use client'
import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ImageGallery from "react-image-gallery";
import Masonry from 'react-masonry-css';
import "react-image-gallery/styles/css/image-gallery.css";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showMasonry, setShowMasonry] = useState(false); // State to control visibility of masonry
  const masonryRef = useRef(null);

  const photos = [
    // Your photos here
    { src: "/m1.jpg", width:100, height: 500 },
    { src: "/m2.jpg", width: 181, height: 421 },
    { src: "/m3.jpg", width: 350, height: 250 },
    { src: "/m4.jpg", width: 250, height: 350 },
    { src: "/m5.jpg", width: 320, height: 220 },
    { src: "/m6.jpg", width: 380, height: 280 },
    { src: "/m7.jpg", width: 420, height: 320 },
    { src: "/m8.jpg", width: 370, height: 270 },
    { src: "/m9.jpg", width: 390, height: 290 },
    { src: "/m10.jpg", width: 340, height: 240 },
    { src: "/m11.jpg", width: 310, height: 210 },
    { src: "/m12.jpg", width: 430, height: 330 },
    { src: "/m13.jpg", width: 360, height: 260 },
    { src: "/m14.jpg", width: 380, height: 280 },
    { src: "/m15.jpg", width: 320, height: 220 },
    { src: "/m16.jpg", width: 410, height: 310 },
    { src: "/m17.jpg", width: 380, height: 280 },
    { src: "/m18.jpg", width: 440, height: 340 },
    { src: "/m18.jpg", width: 440, height: 340 },
    { src: "/m18.jpg", width: 440, height: 340 },
    { src: "/m18.jpg", width: 440, height: 340 },

    // Add more images as needed
  ];

  useEffect(() => {
    // Adjust the height of all columns to match the height of the first column
    if (masonryRef.current) {
      const firstColumnHeight = masonryRef.current.firstChild.clientHeight;
      const columns = masonryRef.current.querySelectorAll('.my-masonry-grid_column');
      columns.forEach(column => {
        column.style.height = `${firstColumnHeight}px`;
      });
    }
  }, [selectedImage, galleryOpen]);

  useEffect(() => {
    // Delay the display of masonry section
    const timer = setTimeout(() => {
      setShowMasonry(true); // Show masonry after a delay
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setSelectedImage(null);
    setGalleryOpen(false);
  };

  return (
    <main>
      <div className="main">
      <div className="super_maternity">
      <div className="maternity_main">
      <div className="maternity_porfolio">Portfolio</div>
            <div className="maternity__photography">Family Portraits

</div>
        <div className="maternity_main_sec">
          
          {/* Gallery and other sections here */}
          {selectedImage !== null && galleryOpen && (
                <div className="gallery-modal">
                  <div className="func">
                    <div className="close-icon" onClick={handleCloseGallery}>
                      <AiOutlineCloseCircle size={25} />
                    </div>
                    <ImageGallery
                      items={photos.map((photo) => ({
                        original: photo.src,
                        thumbnail: photo.src,
                      }))}
                      renderItem={(item) => (
                        <div style={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <img
                            src={item.original}
                            className="origimage"
                          />
                        </div>
                      )}
                      startIndex={selectedImage}
                      showThumbnails={true}
                      showNav={true}
                      onCloseRequest={handleCloseGallery}
                      renderThumbInner={({ thumbnail }) => (
                        <div
                          style={{
                            width: "100px",
                            height: "75px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={thumbnail}
                            className="thumbn"
                           
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>
              )}
        </div>
        {showMasonry && (
          <div  className="masonry-parent">
            <div className="masonry-container" ref={masonryRef}>

              
              <Masonry
                breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {photos.map((photo, index) => (
                  <div style={{ overflow: 'hidden' }} key={index} onClick={() => handleThumbnailClick(index)}>
                    <img
                      src={photo.src}
                      alt={`Photo ${index}`}
                      style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </Masonry>
            </div>
          </div>
        )}
        {/* Other sections here */}
        </div></div>
        <div className="maternity_text_pra_main">
          <div className="maternity_text_pra_min">
          My family photography services are all about working with you to capture the perfect images of you and your family. There’s really no limit to the kind of magic we can create with a family photography setting.<br />
          Stop and think when was the last time you had a professional full family photograph? As children age and grow up this often becomes less and less something many families do. children have their pictures taken at school and you may snap pics of the kids with your cell phone, but as months turn into years, it’s often far too long between professional photo sessions. So why not make an appointment for a unique family session today?<br /><br />
          There’s no shortage of opportunities to do so. Perhaps you want to spruce up the family holiday greeting card, or you want to take an Easter Picture with you and your growing children. Valentines Day is another great opportunity to take pictures with the family.<br /> <br />
          You don’t need a holiday or a reason to take family pictures other than wanting to capture a moment in time. I love family photography because no two sessions are the same. Whether you’re looking to celebrate an event, prepare for your child’s final year of high school with Senior Portraits, or just have a new photo taken to update your picture frame at the office, I want to help you create a truly special family portrait.
         <br /><br />
         So if you’re ready, now is the perfect time to reach out and give me a call. I’d love to hear your ideas for a family photography session (all while sharing my own ideas based off of what you’re looking for). You can even schedule your session directly through the website if you’re set and ready to go.
          </div>
        </div>
        <div className="let_me_main">
          <div className="let_me_min">
            <div className="let_text_1">
              Let me capture all your special <br />
              moments and memories today.
            </div>
            <div className="let_text_2">
              I genuinely look forward to the opportunity of working with you{" "}
              <br />
              and your family.
            </div>
          </div>
        </div>
        <div className="schedule_your_session_main">
          <button className="schedule_your_session_button">
            Schedule your session
          </button>
        </div>      </div>
    </main>
  );
};

export default Page;
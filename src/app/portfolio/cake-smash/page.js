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
            <div className="maternity__photography">Cake Smash Photos

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
          I absolutely love these kinds of photo shoots. A cake smash shoot is an emerging trend in child photography that really allows a child to be himself or herself. A few years ago “Wreck The Dress” became a major trend in post-wedding photography, where the bride would go out and do crazy things in her dress (such as diving into lakes, painting it, and doing just about anything else that “wrecks” it). The cake smash is something similar, only less messy and you won’t be destroying something expensive.<br />
          A cake smash photo shoot is exactly what it sounds like. Your child, a birthday cake in front of them, and they take care of the rest. Whether they are messily eating the cake or destroying it (or realistically a bit of both), it’s the perfect opportunity for great photos. Besides, who doesn’t love a great baby eating photo?<br /><br />
          I believe a cake smash photo shoot is the perfect opportunity to celebrate your child’s first year on this planet. You may want to put on a birthday party for your child but chances are not everyone you want to invite will be able to come. These photos are the perfect way to let them in on your little party.
A cake smash brings out the joy of your child. No matter how many times I do such a photo shoot I’m always left amazed at how a cake can bring out the smile in the youngest of children. Even if they don’t eat any of it, the joy of grabbing hold of the cake, feeling it between their fingers, and watching it topple down while they smash it is an experience to behold.<br /> <br />
Please click through my portfolio of cash smash photo shoots. I’m sure you’ll love the pictures every bit as much as I do. Personally, I love a bright, vibrant cake with lots of colors. It really helps the photos pop, but you may have your own preference or style ideas. Perhaps your little tyke loves Batman or ponies or Wonder Woman. You can bring their interests into the cake smash photo shoot just like you would in any other session.
So if you’re interested in setting up a cake smash session or want to know more about how I go about such a photo shoot,
        
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
"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Gallery from "react-photo-gallery";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [popupOpen, setPopupOpen] = useState(null);
  const [modalWidth, setModalWidth] = useState("50%");
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handlePopupToggle = (index) => {
    setPopupOpen(popupOpen === index ? null : index);
  };

  useEffect(() => {
    const updateModalWidth = () => {
      const newWidth = window.innerWidth >= 768 ? "50%" : "80%";
      setModalWidth(newWidth);
    };

    updateModalWidth();
    window.addEventListener("resize", updateModalWidth);

    return () => {
      window.removeEventListener("resize", updateModalWidth);
    };
  }, []);
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setSelectedImage(null);
    setGalleryOpen(false);
  };
  const photos = [
    { src: "/m1.jpg", width: 150, height: 330 },
    { src: "/m2.jpg", width: 281, height: 421 },
    { src: "/m3.jpg", width: 350, height: 250 },
    { src: "/m4.jpg", width: 450, height: 350 },
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
    // { src: '/m19.jpg', width: 350, height: 250 },
    // Add more images with different dimensions as needed
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const ImageComponent = ({ index, onClick, photo, margin }) => {
    const imgStyle = {
      cursor: "pointer",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
    };

    const handleClick = (event) => {
      onClick(event, { photo, index });
    };

    return (
      <div style={{ overflow: "hidden" }}>
        <img
          style={{ ...imgStyle, margin: `${margin}px` }}
          {...photo}
          onClick={onClick ? handleClick : null}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleThumbnailClick(index)}
        />
      </div>
    );
  };

  return (
    <main>
      <div className="main">
        <div className="super_maternity">
          <div className="maternity_main">
            <div className="maternity_porfolio">Portfolio</div>
            <div className="maternity__photography">Maternity Photography</div>
            <div className="maternity_main_sec">
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
              <Gallery photos={photos} renderImage={ImageComponent} />
              {/* <MatGallary/> */}
            </div>
          </div>
        </div>
        <div className="maternity_text_pra_main">
          <div className="maternity_text_pra_min">
            Maternity is such a special time in your life. This is especially
            true if you're pregnant for the first time. Your body is going
            through all kinds of unexpected changes (because no matter how much
            you read up on it or how much people tell you about it, there’s
            never any real way to understand it until you actually go through
            with it). The beautiful time in your life is something you may only
            experience for a few months total. Even if you have several children
            as a mother, your maternity time is one of the shortest periods in
            your life, and someday you may want to look back and remember just
            how it felt to carry your baby. <br />
            I love maternity photography because not only is it a way to
            remember this important time in your life (and the life of your
            baby), but it’s a fantastic way to show your child when they are
            older. There’s also a maternal glow that develops in this stage. I
            know you may not always feel it, but trust me, it’s there. Everyone
            else can see this glow about you, and it shines through my lens.
            Maternity photographs are great for when you want to share beautiful
            photographs of you and your expectant body with family and friends.
            You also need a photographic eye to make sure you’re captured at
            just the right moment and at the right angle (because we’ve all seen
            the cell phone photos that don’t always turn out, despite the best
            intentions of the amateur photographer). <br />
            A maternity photo shoot is one I recommend to all expectant mothers,
            especially if this is their first time pregnant. I know as a mother
            I was in awe at the changes that my own body went through, and now
            those photos are some of my favorite ever taken of me. I promise
            you’ll feel the same way when you look back and see the pure joy and
            amazement in your eyes. <br />
            If you're interested in setting up a maternity photography session,
            feel free to look through the maternity portfolio and then give me a
            call with any questions you might have.
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
        </div>
      </div>
    </main>
  );
};

export default Page;

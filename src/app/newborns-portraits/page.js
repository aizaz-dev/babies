"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import ReactModal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Page = () => {
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

  const customModalStyles = {
    content: {
      width: modalWidth,
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      zIndex: "100",
      maxHeight: "80vh",
      overflowY: "auto",
    },
  };
  const images = [
    { id: 1, original: "/n1.jpg", thumbnail: "/n1.jpg" },
    { id: 2, original: "/n2.jpg", thumbnail: "/n2.jpg" },
    { id: 3, original: "/n3.jpg", thumbnail: "/n3.jpg" },
    { id: 4, original: "/n4.jpg", thumbnail: "/n4.jpg" },
    { id: 5, original: "/n5.jpg", thumbnail: "/n5.jpg" },
    { id: 6, original: "/n6.jpg", thumbnail: "/n6.jpg" },
    { id: 7, original: "/n7.jpg", thumbnail: "/n7.jpg" },
    { id: 8, original: "/n8.jpg", thumbnail: "/n8.jpg" },
    { id: 9, original: "/n9.jpg", thumbnail: "/n9.jpg" },
    { id: 10, original: "/n10.jpg", thumbnail: "/n10.jpg" },
    { id: 11, original: "/n11.jpg", thumbnail: "/n11.jpg" },
    { id: 12, original: "/n12.jpg", thumbnail: "/n12.jpg" },
    { id: 13, original: "/n14.jpg", thumbnail: "/n14.jpg" },
    { id: 14, original: "/n15.jpg", thumbnail: "/n15.jpg" },
    { id: 15, original: "/n16.jpg", thumbnail: "/n16.jpg" },
    { id: 16, original: "/n17.jpg", thumbnail: "/n17.jpg" },
    { id: 17, original: "/n18.jpg", thumbnail: "/n18.jpg" },
    { id: 18, original: "/n19.jpg", thumbnail: "/n19.jpg" },
    { id: 19, original: "/n20.jpg", thumbnail: "/n20.jpg" },
    { id: 20, original: "/n21.jpg", thumbnail: "/n21.jpg" },
    { id: 21, original: "/n22.jpg", thumbnail: "/n22.jpg" },
    { id: 22, original: "/n23.jpg", thumbnail: "/n23.jpg" },
    { id: 23, original: "/n24.jpg", thumbnail: "/n24.jpg" },
    { id: 24, original: "/n25.jpg", thumbnail: "/n25.jpg" },
    { id: 25, original: "/n26.jpg", thumbnail: "/n26.jpg" },
    { id: 26, original: "/n27.jpg", thumbnail: "/n27.jpg" },
    { id: 27, original: "/n28.jpg", thumbnail: "/n28.jpg" },
    { id: 28, original: "/n29.jpg", thumbnail: "/n29.jpg" },
    { id: 29, original: "/n30.jpg", thumbnail: "/n30.jpg" },
    { id: 30, original: "/n31.jpg", thumbnail: "/n31.jpg" },
    { id: 31, original: "/n32.jpg", thumbnail: "/n32.jpg" },
    { id: 32, original: "/n33.jpg", thumbnail: "/n33.jpg" },
    { id: 33, original: "/n34.jpg", thumbnail: "/n34.jpg" },
    { id: 34, original: "/n35.jpg", thumbnail: "/n35.jpg" },
    { id: 35, original: "/n36.jpg", thumbnail: "/n36.jpg" },
    { id: 36, original: "/n37.jpg", thumbnail: "/n37.jpg" },
    { id: 37, original: "/n38.jpg", thumbnail: "/n38.jpg" },
    { id: 38, original: "/n39.jpg", thumbnail: "/n39.jpg" },
    { id: 39, original: "/n40.jpg", thumbnail: "/n40.jpg" },
    { id: 40, original: "/n41.jpg", thumbnail: "/n41.jpg" },
    { id: 41, original: "/n42.jpg", thumbnail: "/n42.jpg" },
    { id: 42, original: "/n43.jpg", thumbnail: "/n43.jpg" },
    { id: 43, original: "/n44.jpg", thumbnail: "/n44.jpg" },
    { id: 44, original: "/n45.jpg", thumbnail: "/n45.jpg" },
    { id: 45, original: "/n46.jpg", thumbnail: "/n46.jpg" },
    { id: 46, original: "/n47.jpg", thumbnail: "/n47.jpg" },
    { id: 47, original: "/n48.jpg", thumbnail: "/n48.jpg" },
  ];
  return (
    <div>
      {/*start text  */}
      <div className="start">
        <div className="protfolio">Portfolio</div>
        <div className="newborn">Newborns Portraits</div>
      </div>
      {/* flex portion */}
      <div className="maincont">
        <div className="flex">
          <div className="gall">
            {selectedImage !== null && (
              <div
                style={{ display: galleryOpen ? "block" : "none" }}
                className="gallery-modal"
              >
                <div className="func">
                  <div
                    className="close-icon"
                    onClick={() => setSelectedImage(null)}
                  >
                    <AiOutlineCloseCircle size={25} />
                  </div>
                  <ImageGallery
                    items={images}
                    startIndex={selectedImage}
                    showThumbnails={true}
                    showNav={true}
                    onCloseRequest={() => setSelectedImage(null)}
                  />
                </div>
              </div>
            )}
          </div>
          {images.map((image, index) => (
            <div key={index} className="pic">
              <Image
                className="imgvv"
                src={image.thumbnail}
                alt={`img${index + 1}`}
                width={500}
                height={500}
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Image Gallery */}

      {/* main text */}
      <div className="txtmain">
        <div className="mtext">
          Newborn photography is truly a combination of art and photography. You
          can’t always anticipate how your baby is going to be feeling, whether
          they’ll be tired, cranky, wide awake, or playful. But that’s also the
          beauty of newborn photography. There is an organic nature within it
          you simply can’t account for. You just need to let it happen, which is
          why newborn photography is also one of my favorite forms of
          photography.
          <br /> <br />
          Before your photo shoot, we’ll go over a number of ideas. You are
          welcome to go through my current portfolio and pick out any style or
          setting you’re interested in. But don’t feel like you must go with a
          picture style that looks just like something I’ve already captured. We
          have a number of different backdrops you can choose from inside the
          studio. Plus you can bring your favorite outfit (because sometimes
          there’s nothing more adorable than a newborn in a Super Girl or Iron
          Man costume).
          <br /> <br />
          I always recommend going over the details ahead of any photo shoot.
          This way we are on the same page. After all, with newborn photography,
          there may only be a few moments to capture the perfect photo, and you
          won’t want to miss the opportunity.
          <br />
          And please, don’t ever worry if your baby is crying when you arrive.
          Trust me, I’m a mother of three children and I know babies do not
          always want to cooperate with what you had planned. But that’s
          perfectly fine. We’ll work around it. I’ve also found that some of my
          favorite pictures come out of these sessions where we have to work on
          our toes and snap pictures in the few moments where your baby does
          fall asleep.
          <br /> <br /> I recommend scheduling your newborn photography session
          as early on as possible. It’s truly amazing how fast a newborn begins
          to grow. Part of the magic of a newborn photography session is to
          document this small frailness. Of course, it can be fun to set up
          sessions at six months and a year as well. You may not even realize
          just how much they’ve grown in a short amount of time until you
          compare the two photography sessions. However, when it comes to
          blocking off the time for your newborn photo session, we can go over
          the details before your baby is born, so we’re ready to go and just
          need to set up a time when your bundle of joy does arrive.
          <br /> <br /> So feel free to contact me with any newborn photography
          questions you might have, ideas you’re considering, or to simply set
          up a time to go over everything and set up a photo shoot.
        </div>
        {/* let text */}
        <div className="let">
          {" "}
          <br /> Let me capture all your special moments and memories today.
        </div>
        <div className="Itext">
          {" "}
          <br />I genuinely look forward to the opportunity of working with you
          and your family.
        </div>
        {/* span */}
        <div className="span">
          <div className="session">Schedule your session</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

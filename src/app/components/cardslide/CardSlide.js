"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlide.scss"; // Import your global CSS file
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Define your custom previous and next icons
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span alt="Previous" className="custom-arrow prev" onClick={onClick}>
      <FaChevronLeft size={25}/>
    </span>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <span alt="Next" className="custom-arrow next" onClick={onClick}>
      <FaChevronRight size={25}/>
    </span>
  );
};

const testimonialData = [
  {
    text: "Simply amazing. Claudette is laid back and so so easy to work with. She is so humble and quick at capturing the best moments. Would highly recommend it!",
    name: "SONIA P",
  },
  {
    text: "We've used Cydnee from CLJ photography for the past 4yr. She is absolutely amazing and we just love her work. She's patient, kind, and takes the most beautiful pictures.",
    name: "KIM BLAKELY",
  },
  {
    text: "CYDNEE IS AMAZING. She took what was an extremely difficult pregnancy and left me with stunning images that remind me I am strong, plus her gown wardrobe!",
    name: "SHANNON MARTINO",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding for center mode as needed
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,

        },
      },
      {
        breakpoint: 768, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding for center mode as needed
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div style={{ display: "flex", gap: "50px" }} key={index}>
            <div className="boxslide">
              <p className="mnp">{testimonial.text}</p>
              <div className="name">{testimonial.name}</div>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="/icon.png"
                    alt=""
                    className="icon-star"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
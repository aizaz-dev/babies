"use client";
import React from "react";
import Slider from "react-slick";
import "./Slidetwo.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const SlideTwo = () => {
  const slides = [
    {
      name: "Kesh Man",
      date: "2023-11-27",
      image: "./unnamed.png",
      description:
        "My daughter and I had a great experience at CLJ Photography. The photographer was amazing...",
      link: "#",
    },
    {
      name: "Natasha SAlaZAr",
      date: "2023-11-02",
      image: "./flower.png",
      description:
        "Scheduled a Cake Smash with CLJ Photography and I couldn’t have asked for more.",
      link: "#",
    },
    {
      name: "Kara Kalty",
      date: "2023-11-11",
      image: "./kesh.png",
      description:
        "I’ve used CLJ photography for many occasions! I have loved the outcome from every one!!!! Claudette is a talente...",
      link: "#",
    },
  ];
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
          breakpoint: 1024, // For screens smaller than 1024px
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600, // For screens smaller than 600px
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
    <Slider className="sliderg" {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-item">
          <div className="exce-rate-2">
            <div className="item-p-wrap1">
              <div className="colflex">
                <div className="inflex">
                <div className="item-p-wrap">
                  <img src={slide.image} alt="" className="item" />
                  <div className="wrapper-p">
                    <p className="item-wrap">{slide.name}</p>
                    <p className="item-wrap1">{slide.date}</p>
                  </div>
                </div>
                <img src="./google-icon.png" alt="" className="google-icon" />
                </div>
              <div className="images">
                {[...Array(5)].map((_, i) => (
                    <img key={i} src="./icon.png" alt="" className="icon" />
                    ))}
              </div>
                    </div>
            </div>
            <div className="para">
              <p className="para1">{slide.description}</p>
              <a style={{fontSize:'14px', color:'#484e57'}} className="anchr" href={slide.link}>
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlideTwo;

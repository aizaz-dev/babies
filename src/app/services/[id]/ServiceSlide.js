"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import data from "../array";
import { useParams } from "next/navigation";
import "./ServiceSlide.scss"; // Make sure to import your SCSS styles

const ServiceSlide = () => {
  const { id } = useParams();
  const filteredData = data.find((item) => {
    return item.slug === id;
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="slidetop">
      <Slider {...settings} className="">
        {/* <div className='imgslide'>
                    <img className="" src={filteredData.imgUrl} alt={`Slide`} />
                </div>
                <div>
                    <img className="imgslide" src={filteredData.imgUrl2} alt={`Slide`} />
                </div> */}
        {filteredData.images.map((item, index) => {
          return (
            <div className="imgslide" key={id}>
              <img src={item.imgUrl} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServiceSlide;

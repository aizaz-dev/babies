'use client'
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MainSlide.scss';
import Image from 'next/image';

const images = [
  '/topslide/1.jpg',
  '/topslide/2.jpg',
  '/topslide/3.jpg',
  '/topslide/4.jpg',

  // Add more image URLs as needed
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

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
    <Slider {...settings} className='slidetop'>
      {images.map((image, index) => (
        <div  key={index} className={index === currentSlide ? styles.active : ''}>
          <Image className='imgslide' src={image} alt={`Slide ${index + 1}`} width={1500} height={500}/>
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;

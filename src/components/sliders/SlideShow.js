/** @format */

import React from 'react';
import '../../css/sliders/SliderShow.css';
import CoursePreview from '../cards/CoursePreview';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Slider from 'react-slick';

const SlideShow = ({ courses }) => {


  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='Control next' onClick={onClick}>
        <IoArrowForward />
      </div>
    );
  };

  const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='Control prev' onClick={onClick}>
        <IoArrowBack />
      </div>
    );
  };

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className='SliderShow'>
      <div className='SlideContainer' >
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div
              className='SlideCourse'
              key={index}
              style={{ height: 400 }}>
              <CoursePreview
                backgroundImage={course.backgroundImage}
                course={course.course}
                number={course.number}
                url={course.url}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideShow;

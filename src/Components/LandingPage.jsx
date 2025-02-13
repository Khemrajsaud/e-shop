import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import landing1 from './SlideImage/landing1.png';
import landing2 from './SlideImage/landing2.png';
import landing3 from './SlideImage/landing3.png';

const slides = [
  { img: landing3 },
  { img: landing1 },
  { img: landing2 },
];

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-[50px] relative group">
      {/* Slides */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer bg-black/50 rounded-full p-2 shadow-lg hover:bg-black/70 transition-colors duration-200"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft className="text-4xl font-bold text-white" />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-black/50 rounded-full p-2 shadow-lg hover:bg-black/70 transition-colors duration-200"
        onClick={nextSlide}
      >
        <BsChevronCompactRight className="text-4xl font-bold text-white" />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <RxDotFilled
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 cursor-pointer text-2xl ${
              currentSlide === index ? "text-yellow-600" : "text-gray-500"
            } hover:text-yellow-600 transition-colors duration-200`}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
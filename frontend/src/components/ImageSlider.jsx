import React, { useState, useEffect } from "react";
import Slide1 from "../images/building1.jpg";
import Slide2 from "../images/building2.jpg";
import Slide3 from "../images/building3.jpg";

const ImageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const slides = props.props;
  console.log(slides);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-5xl font-serif  text-black mb-4">
              {slide.text}
            </h1>
            <p className="text-xl text-gray-800 mb-8">{slide.description}</p>
            {/* You can add additional text or elements here */}
            <button
              onClick={scrollToAbout}
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 flex items-center justify-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a.5.5 0 0 0 .707 0l3-3a.5.5 0 1 0-.707-.707L10 10.293 7.646 7.939a.5.5 0 1 0-.707.707l3 3z"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

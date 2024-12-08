import React, { useState, useEffect } from "react";
import { serviceList } from "./serviceList";


const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-[80%] sm:w-[70%] lg:w-[50%] h-[500px] sm:h-[600px] lg:h-[700px] mx-auto overflow-hidden">
      {/* Container for carousel items */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="flex-shrink-0 w-full flex justify-center items-center" key={index}>
            <img
              src={item.icon}
              alt={item.title}
              className="w-auto h-full max-w-full max-h-full object-contain" // Make sure the image is fully visible and responsive
            />
          </div>
        ))}
      </div>

      {}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <div
      className="h-full min-h-[80vh] w-full px-5 py-10 md:px-20"
      id="services"
      data-aos="fade-up"
    >
      <h1 className="my-5 text-2xl font-semibold uppercase text-primary dark:text-white">
        <span className="text-brand">//</span> Achievements
      </h1>

      {}
      <div className="container mt-20 flex flex-wrap justify-center gap-y-5 md:mx-auto">
        <Carousel items={serviceList} />
      </div>

      {}
      <div className="mt-10">
        {serviceList.map((data, index) => (
          <div key={index} className="mb-4 text-center">
            <h2 className="text-xl font-semibold text-primary dark:text-white">
              {data.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import iphone from "../../assets/iphone.png"
import samsung from "../../assets/samsung.png"
import airpods from "../../assets/airpods.png"
import ipadpro from "../../assets/ipadpro.png"
import macbookpro from "../../assets/macbook.png"
import iphonelogo from "../../assets/iphonelogo.png"
import { Link } from 'react-router-dom';
const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      brand: "iPhone",
      productName: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      imageSrc: iphone
    },
    {
      brand: "Samsung",
      productName: "Galaxy S23 Ultra",
      offer: "Special 15% Discount",
      imageSrc: samsung
    },
    {
      brand: "MacBook",
      productName: "MacBook Pro M2",
      offer: "Free AirPods on Purchase",
      imageSrc: airpods
    },
    {
      brand: "iPad",
      productName: "iPad Pro 2023",
      offer: "Student Discount Available",
      imageSrc: ipadpro
    },
    {
      brand: "AirPods",
      productName: "Macbook pro",
      offer: "20% Off Today Only",
      imageSrc: macbookpro
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="relative w-full bg-gray-900 overflow-hidden">
      {/* Main container with responsive max-width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative min-h-[350px] xs:min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Content Container */}
          <div className="absolute inset-0 py-8 sm:py-12 md:py-16">
            <div className="h-full flex flex-col justify-between">
              {/* Main Content Wrapper */}
              <div className="flex flex-col md:flex-row h-full items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left">
                  {/* Brand Circle */}
                  {/* <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full mx-auto md:mx-0 transition-all duration-300" /> */}
                  <img src={iphonelogo} className='w-100' alt="" />
                  
                  {/* Brand Name */}
                  <div className="text-white text-sm sm:text-base md:text-lg font-medium">
                    {slides[activeSlide].brand}
                  </div>
                  
                  {/* Product Name */}
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white transition-all duration-300">
                    {slides[activeSlide].productName}
                  </h2>
                  
                  {/* Offer Text */}
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-all duration-300">
                    {slides[activeSlide].offer}
                  </p>
                  
                  {/* Shop Now Button */}
                  <div className="pt-2 sm:pt-4">
                    <Link 
                      to=""
                      className="inline-flex items-center justify-center md:justify-start text-white hover:text-gray-300 transition-all duration-300 group text-sm sm:text-base md:text-lg"
                    >
                      Shop Now 
                      <ArrowRight 
                        className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                      />
                    </Link>
                  </div>
                </div>

                {/* Image Container */}
                <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 md:px-8">
                  <img
                    src={slides[activeSlide].imageSrc}
                    alt={slides[activeSlide].productName}
                    className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 
                             object-contain transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 md:mt-0">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 
                      ${index === activeSlide 
                        ? 'bg-white w-4 sm:w-6' 
                        : 'bg-gray-500 hover:bg-gray-300 w-2 sm:w-3'
                      }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
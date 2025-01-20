import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const carouselSlides = [
  {
    title: "Characters Page",
    description: "Explore Rick and Morty Characters",
    features: [
      "Fetches characters from Rick and Morty API",
      "Dynamic data loading",
      "Responsive grid layout",
      "Detailed character information"
    ],
    image: "/images/tanstack-preview.png"
  },
  {
    title: "Traditional Fetch Page",
    description: "View Memes using traditional JavaScript fetch method",
    features: [
      "Displays memes from Imgflip API",
      "Manual state management",
      "Simple data fetching approach",
      "Basic implementation"
    ],
    image: "/images/traditional-preview.png"
  },
  {
    title: "Mutation Page",
    description: "Interactive post creation and deletion",
    features: [
      "Add and delete posts dynamically",
      "Real-time updates",
      "Interactive data management",
      "Instant updates"
    ],
    image: "/images/mutation-preview.png"
  },
  {
    title: "Project Features",
    description: "Exploring different data fetching techniques",
    features: [
      "Multiple data fetching methods",
      "Dynamic content loading",
      "Interactive interfaces",
      "Responsive design"
    ],
    image: "/images/react-query-benefits.png"
  },
  {
    title: "Project Overview",
    description: "A comprehensive demonstration of modern React data fetching techniques",
    features: [
      "Multiple data fetching strategies",
      "Real-world API integrations",
      "Responsive design",
      "Interactive user experiences"
    ],
    image: "/images/project-overview.png"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use a ref to track mounted state
  const [isMounted, setIsMounted] = React.useState(true);

  // Memoize the slide change function
  const changeSlide = React.useCallback(() => {
    if (!isMounted) return;
    
    console.log('Changing slide', currentSlide);
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % carouselSlides.length;
      console.log('Next slide', nextSlide);
      return nextSlide;
    });
  }, [isMounted, currentSlide]);

  // Set up interval for slide changes
  useEffect(() => {
    // Only set up interval if component is mounted
    if (!isMounted) return;

    const intervalId = setInterval(changeSlide, 3000);
    
    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [changeSlide, isMounted]);

  // Track mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Manual dot click handler
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container-full">
      <h1 className="page-title">React Project</h1>
      <div className="carousel-container-full">
        {carouselSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide-full ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              display: index === currentSlide ? 'block' : 'none',
              opacity: index === currentSlide ? 1 : 0
            }}
          >
            <div className="slide-content-full">
              <div className="slide-overlay"></div>
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="slide-background"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1920x1080?text=Image+Not+Found';
                }}
              />
              <div className="slide-text-full">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <ul>
                  {slide.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        <div className="carousel-dots-full">
          {carouselSlides.map((_, index) => (
            <span 
              key={index} 
              className={`dot-full ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

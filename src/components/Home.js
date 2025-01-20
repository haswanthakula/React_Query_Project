import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container-full">
      <h1 className="page-title">React Query Project</h1>
      <div className="carousel-container-full">
        {carouselSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide-full ${index === currentSlide ? 'active' : ''}`}
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

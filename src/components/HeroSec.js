import React from 'react';
import "../App.css"
import FeatureSection from './FeatureSection';

const HeroSection = () => {
  return (
    <div>
      <div className="SUB-CONTAINER">
        <h1 className='heading text-center text-4xl font-bold mb-6 animate__animated animate__fadeInUp'>About EthAi</h1>
        <p className='para text-center text-lg animate__animated animate__fadeInUp delay-2s'>
          At Eth Ai, we're all about making crypto trading easier and more intuitive. <br />
          We provide tools that help traders keep up with new market trends and track top traders' movements.
        </p>
      </div>
      <FeatureSection />
    </div>
  );
}

export default HeroSection;

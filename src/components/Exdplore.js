import React from "react";
import "../App.css"
import Footer from "./Footer";

const Explore = () => {
  return (
    <div>
         <div className="text-center">
      <div className="section-box">
        <h1>
          Explore Our <span className="text-darksky">dApp</span>
        </h1>
        <p className="description">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. By tracking smart money flows, monitoring key
          wallets, and providing real-time market insights, EthAi empowers users
          to stay ahead of trends. The platform offers intuitive AI features for
          asset recommendations, market analysis, and personalized crypto Q&A,
          making it the ultimate tool for both novice and experienced traders.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Explore;

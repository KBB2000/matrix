import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <div>
            <div className="bg-teal-500 w-12 h-12 mb-4 rounded-full"></div>
            <h2 className="text-xl font-bold">Trade Optimizer</h2>
            <p className="mt-2 text-sm">
              Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold">Market Insight</h2>
          <p className="mt-2 text-sm">
            Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold">Risk Guard</h2>
          <p className="mt-2 text-sm">
            Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold">Portfolio Sync</h2>
          <p className="mt-2 text-sm">
            Easily manage your portfolio. You’ll always know what you own, how it’s performing, and where it’s headed.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold">Opportunity Scout</h2>
          <p className="mt-2 text-sm">
            Find exciting new projects, events, and tokens that others might be missing. Identify promising opportunities early.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

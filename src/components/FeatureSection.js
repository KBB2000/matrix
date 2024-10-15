import React from 'react';
import Roadmap from './Roadmap';

const FeatureSection = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-dark text-white py-10'>
      <section className="flex flex-col items-center justify-center bg-dark text-white py-10">
        <div className="w-full max-w-4xl text-center space-y-6">
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-200">
  Read more
</button>


          <div className="bg-[#102131] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature Item 1 */}
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lightblue rounded-full"></div>
                <h3 className="text-lg font-bold">Stay Ahead</h3>
              </div>
              <p className="text-sm text-gray-400">No more guesswork—get clear, trustable insights.</p>
            </div>

            {/* Feature Item 2 */}
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lightblue rounded-full"></div>
                <h3 className="text-lg font-bold">Know Your Assets</h3>
              </div>
              <p className="text-sm text-gray-400">Always stay on top of how your investments are performing.</p>
            </div>

            {/* Feature Item 3 */}
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lightblue rounded-full"></div>
                <h3 className="text-lg font-bold">Simple, Not Overwhelming</h3>
              </div>
              <p className="text-sm text-gray-400">
                Our tools are designed to make complex market analysis easy to understand and act on.
              </p>
            </div>

            {/* Feature Item 4 */}
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lightblue rounded-full"></div>
                <h3 className="text-lg font-bold">Future-Proof</h3>
              </div>
              <p className="text-sm text-gray-400">
                We’re constantly improving, adding new features to help you make the most informed decisions possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Roadmap />
    </div>
  );
};

export default FeatureSection;

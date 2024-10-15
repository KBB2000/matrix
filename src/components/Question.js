import React from 'react';
const Question = () => {
  return (
    <>
    <div className="py-10">
      <div className="text-center mb-8">
      </div>
      <div className="flex flex-col md:flex-row justify-around max-w-6xl mx-auto space-y-6 md:space-y-0">
        <div className="flex-1 md:mr-4">
        </div>
          {/* <p className="text-lg font-semibold">What is EthAi?</p> */}
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          {/* <p className="text-lg font-semibold">Who can use EthAi?</p> */}
        <div className="flex-1 md:ml-8">
          <h2 className="text-sm">+Usage Questions</h2>
          <p className="text-sm">+How can EthAi help me as a tracker?</p>
          <p className="text-sm">+How does EthAi help me as a tracker?</p>
          <p className="text-sm">+How does data ensure security?</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Question;

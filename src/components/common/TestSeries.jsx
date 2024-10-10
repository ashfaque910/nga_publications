import React from "react";

const TestSeries = ({ title }) => {
  return (
    <div className="test-series relative text-center text-[#2E6982] p-16 overflow-hidden rounded-xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0 rounded-xl"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_640.jpg')`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 py-16">
        <h1 className="text-3xl font-bold text-left">{title}</h1>
      </div>
    </div>
  );
};

export default TestSeries;

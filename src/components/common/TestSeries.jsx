import React from "react";

const TestSeries = ({ title }) => {
  return (
    <div className="test-series relative text-center text-[#2E6982] p-16 overflow-hidden rounded-xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0 rounded-xl"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?t=st=1728727532~exp=1728731132~hmac=2b1afa9fc40de6d88ad0596cc141db93fd6634d96c43acc776f6c5bda0f80f85&w=740')`,
          border:'1px solid #2e6982'
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 py-16">
        <h1 className="text-3xl font-bold relative bottom-12">{title}</h1>
      </div>
    </div>
  );
};

export default TestSeries;

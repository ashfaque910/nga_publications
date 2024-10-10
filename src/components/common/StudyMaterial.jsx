import React from "react";
import ClickArrow from "./ClickArrow"; // Import ClickArrow

const StudyMaterial = ({ title, description, target }) => {
  return (
    <div className="study-material relative text-center text-[#2E6982] p-8 overflow-hidden rounded-xl ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 rounded-xl"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2024/02/28/12/39/girl-8601996_640.png')`,
        }}
      ></div>
{/* https://cdn.pixabay.com/photo/2019/07/11/14/24/reading-4330761_640.jpg */}
      {/* Foreground Content */}
      <div className="relative z-10 text-left p-16">
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* <p className="pt-4">{description}</p> */}

        {/* Include the arrow button to navigate */}
        <div className="mt-16 p-8">
          <ClickArrow target={target} />
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;

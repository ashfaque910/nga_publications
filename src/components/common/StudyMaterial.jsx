import React from "react";
import ClickArrow from "./ClickArrow"; // Import ClickArrow
import { Link } from "react-router-dom";
// import './StudyMaterial.css';

const StudyMaterial = ({ title, description, target }) => {
  return (
    <div className="study-material relative text-center text-[#2E6982] p-8 overflow-hidden rounded-xl ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 rounded-xl"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?t=st=1728727893~exp=1728731493~hmac=9413ca854de741602721d084a6dce5d7f8d88769d218e2446d929dc1d7c6558b&w=740')`,
          border:'1px solid #2e6982'
        }}
      ></div>
      {/* https://cdn.pixabay.com/photo/2019/07/11/14/24/reading-4330761_640.jpg */}
      {/* Foreground Content */}
      <div className="relative z-10 p-16">
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* <p className="pt-4">{description}</p> */}

        {/* Include the arrow button to navigate */}
        <div className="mt-16 p-8 hover:text-[#225160] cursor-pointer ">
          <Link className="font-extrabold" to={target}>ReadMore</Link>
          <ClickArrow target={target} />
        </div>
      
        
      </div>
    </div>
  );
};

export default StudyMaterial;

import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./commonpages/StudyMaterial";
import TestSeries from "./commonpages/TestSeries";
import WhyChooseUs from "./WhyChooseUs";

const Jee = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
        <h1>JEE - MAINS</h1>
      </div>
      <div className="common-container mb-4">
        <div className="common-content">
          {/* JEE Study Material */}
          <div className="common-study-material">
            {/* StudyMaterial Component with navigation */}
            <StudyMaterial
              title="JEE Study Material"
              target="/jee/jee-study-material" // Pass the correct route
            />
          </div>

          {/* JEE Test Series */}
          <div className="common-test-series">
            <TestSeries
              title="JEE Test Series"
              description="Join the JEE test series to prepare for the exam."
            />
            <Link
              to="/download/JEE-Mains-2025.pdf?title=JEE - Mains - 2025"
              className="download-link"
            >
              JEE - MAINS Test Series (No.of Test Count)
            </Link>
            <Link
              to="/download/JEE-PT,MT,FST,GT.pdf?title=JEE - PT, MT, FST, GT"
              className="download-link"
            >
              JEE - MAINS Test Series (Track Sheet)
            </Link>
            <Link to="/jee/sample-test" className="download-link">
              Jee - Mains Sample Test Paper
            </Link>
          </div>
        </div>
      </div>
            <WhyChooseUs/>
    </>
  );
};

export default Jee;

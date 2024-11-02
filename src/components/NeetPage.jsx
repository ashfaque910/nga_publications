import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./commonpages/StudyMaterial";
import TestSeries from "./commonpages/TestSeries";
import WhyChooseUs from "./WhyChooseUs";

const NeetPage = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
        <h1>NEET - UG</h1>
      </div>
      <div className="common-container mb-4 ">
        <div className="common-content">
          {/* NEET Study Material */}
          <div className="common-study-material">
            {/* StudyMaterial Component with navigation */}
            <StudyMaterial
              title="NEET Study Material"
              target="/neet/neet-study-material"
              description="Our NEET study material, officially endorsed by the college, provides everything students need to excel in their exams."
            />
          </div>

          {/* NEET Test Series */}
          <div className="common-test-series">
            <TestSeries
              title="NEET Test Series"
              description="Join the NEET test series to prepare for the exam."
            />
            <Link
              to="/download/NEET-2025.pdf?title=NEET - 2025"
              className="download-link"
            >
              Neet Test Series (No.of Test Count)
            </Link>
            <Link
              to="/download/NEET-PT,MT,FST,GT.pdf?title=NEET - PT, MT, FST, GT"
              className="download-link"
            >
              Neet Test Series (Track Sheet)
            </Link>
            <Link to="/neet/sample-test" className="download-link">
              NEET Sample Test Paper
            </Link>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
    </>
  );
};

export default NeetPage;

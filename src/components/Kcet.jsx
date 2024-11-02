import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./commonpages/StudyMaterial";
import TestSeries from "./commonpages/TestSeries";

const Kcet = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
        <h1>KCET</h1>
      </div>
      <div className="common-container mb-4">
        <div className="common-content">
          {/* KCEZT Study Material */}
          <div className="common-study-material">
            <StudyMaterial
              title="KCET Study Material"
              target="/kcet/kcet-study-material"
            />
            {/* <DownloadPage nextRoute="/download/KCET-test-series.pdf?title=KCET Test Series" /> */}
          </div>

          {/* KCET Test Series */}
          <div className="common-test-series">
            <TestSeries
              title="KCET Test Series"
              description="Join the KCET test series to prepare for the exam."
            />
            <Link
              to="/download/KCET-2025.pdf?title=KCET - 2025"
              className="download-link"
            >
              KCET Test Series (No.of Test Count)
            </Link>
            <Link
              to="/download/KCET-PT,MT,FST,GT.pdf?title=KCET - PT, MT, FST, GT"
              className="download-link"
            >
              KCET Test Series (Track Sheet)
            </Link>
            <Link to="/kcet/sample-test" className="download-link">
              KCET Sample Test Paper
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kcet;

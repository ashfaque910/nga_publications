import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./commonpages/StudyMaterial";
import TestSeries from "./commonpages/TestSeries";
import WhyChooseUs from "./WhyChooseUs";

const Kcet = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
        <h1>Foundation ('6 to 10')</h1>
      </div>
      <div className="common-container mb-4">
        <div className="common-content">
          {/* KCEZT Study Material */}
          <div className="common-study-material">
            <StudyMaterial
              title="Foundation Study Material"
              target="/foundation/foundation-study-material"
            />
          </div>

          {/* KCET Test Series */}
          <div className="common-test-series">
            <TestSeries
              title="Foundation Test Series"
              description="Join the Foundation test series to prepare for the exam."
            />
            <div className="pt-10">
              <div className="pb-2">
                <Link
                  to="/download/Foundation6to10(2025).pdf?title=Foundation (6 to 10) 2025"
                  className="download-link "
                >
                  Foundation ('6 to 10') Test Series
                </Link>
              </div>
              <div className="pt-4">
                <Link to="/foundation/sample-test" className="download-link">
                  Foundation ('6 to 10') Sample Test Paper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
    </>
  );
};

export default Kcet;

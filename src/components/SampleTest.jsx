import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from './WhyChooseUs';
import "./SampleTest.css"; // Custom styles for SampleTestPage

const SampleTest = ({ exam }) => {
  const sampleLinks = {
    neet: [
      { subject: 'Biology', file: 'neet-ug-biology-sample.pdf' },
      { subject: 'Chemistry', file: 'neet-ug-chemistry-sample.pdf' },
      { subject: 'Physics', file: 'neet-ug-physics-sample.pdf' },
      { subject: 'Grand Test ', file: 'neet-ug-grand-test-sample.pdf' },
    ],
    jee: [
      { subject: 'Chemistry', file: 'jee-main-chemistry-sample.pdf' },
      { subject: 'Mathematics', file: 'jee-main-mathematics-sample.pdf' },
      { subject: 'Physics', file: 'jee-main-physics-sample.pdf' },
      { subject: 'Grand Test', file: 'jee-main-grand-test-sample.pdf' },
    ],
    kcet: [
      { subject: 'Biology', file: 'kcet-grand-test-biology-sample.pdf' },
      { subject: 'Chemistry', file: 'kcet-grand-test-chemistry-sample.pdf' },
      { subject: 'Physics', file: 'kcet-grand-test-physics-sample.pdf' },
      { subject: 'Mathematics ', file: 'kcet-grand-test-maths-sample.pdf' },
    ],
    foundation: [
      { subject: 'Foundation Class 6 (Biology)', file: 'foundationclass-06-biology-sample.pdf' },
      { subject: 'Foundation Class 6 (Maths)', file: 'foundationclass-06-maths-sample.pdf' },
      { subject: 'Foundation Class 6 (Science)', file: 'foundationclass-06-science-sample.pdf' },
      { subject: 'Foundation Class 9 (Physics)', file: 'foundationclass-09-physics-sample.pdf' },
      { subject: 'Foundation Class 10 (Biology)', file: 'foundationclass-10-biology-sample.pdf' },
      { subject: 'Foundation Class 10 (Physics)', file: 'foundationclass-10-physics-sample.pdf' },
    ],
  };

  return (
    <>
    <div className="sample-test-page flex justify-center items-center mb-8">
      <div className="sample-container border rounded-lg p-6 max-w-lg w-full shadow-lg">
        <h1 className="sample-title text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-center">
          {exam.toUpperCase()} Sample Test Papers
        </h1>
        <p className="sample-description text-sm sm:text-base lg:text-lg mb-6 text-center">
          Click on a subject to download the sample paper.
        </p>
        <div className="sample-links">
          {sampleLinks[exam].map(({ subject, file }) => (
            <Link
              key={subject}
              to={`/download/${file}?title=${subject} Sample`}
              className="sample-link"
            >
              {subject} Sample
            </Link>
          ))}
        </div>
      </div>
    </div>
    <WhyChooseUs/>
    </>
  );
};

export default SampleTest;

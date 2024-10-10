import React from 'react';

const  NeetStudyMaterial = () => {
  return (
    <section>
      {/* NEET Study Material Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#2e6982, #c3e6ec,#2e6982, #a7d1d9)'}}>
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">NEET Study Material</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our NEET study material, officially endorsed by the college, provides everything students need to excel in their exams.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Officially Endorsed</h3>
              <p className="text-gray-600">Proudly featuring the college logo and name, ensuring authenticity and credibility.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">Detailed content for all NEET subjects: Physics, Chemistry, and Biology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Aligned with Syllabus</h3>
              <p className="text-gray-600">Updated regularly to reflect the latest NEET syllabus and exam patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Expert Development</h3>
              <p className="text-gray-600">Created by experienced educators and subject matter experts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Practice Questions & Mock Tests</h3>
              <p className="text-gray-600">Includes a range of practice questions and mock tests simulating real exam conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Flexible Formats</h3>
              <p className="text-gray-600">Available in both physical and digital formats to suit various learning preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeetStudyMaterial;

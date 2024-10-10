import React from 'react';

const JeeStudyMaterial = () => {
  return (
    <section>
      {/* JEE Study Material Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#2e6982, #c3e6ec,#2e6982, #a7d1d9)'}}>
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">JEE Study Material</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our JEE study material, endorsed by the college, provides comprehensive resources to help students excel in their JEE exams.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">College-Approved Content</h3>
              <p className="text-gray-600">Features the official college logo and name, ensuring authenticity and reliability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Comprehensive Subject Coverage</h3>
              <p className="text-gray-600">In-depth material covering Physics, Chemistry, and Mathematics, addressing all essential topics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Updated to Current Syllabus</h3>
              <p className="text-gray-600">Regularly revised to align with the latest JEE Mains syllabus and exam patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Expertly Developed Resources</h3>
              <p className="text-gray-600">Created by experienced educators and industry professionals to ensure high-quality content.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Variety of Practice Questions</h3>
              <p className="text-gray-600">A wide range of question types, including MCQs and numerical problems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Realistic Mock Tests</h3>
              <p className="text-gray-600">Full-length mock exams designed to simulate the actual JEE Mains experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Flexible Learning Options</h3>
              <p className="text-gray-600">Available in both physical and digital formats to suit various learning preferences.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JeeStudyMaterial;

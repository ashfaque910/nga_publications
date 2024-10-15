import React from 'react';

const KcetStudyMaterial = () => {
  return (
    <section>
      {/* KCET Study Material Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#2e6982, #c3e6ec,#2e6982, #a7d1d9)'}}>
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xlmd:text-3xl lg:text-4xl  font-bold text-white mb-6">KCET Study Material</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our KCET study material, backed by the college, provides detailed and reliable resources to help students succeed in the KCET exam.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">College-Approved Content</h3>
              <p className="text-gray-600">Features the official college logo and name, ensuring authenticity and trustworthiness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Comprehensive Subject Coverage</h3>
              <p className="text-gray-600">In-depth materials for Physics, Chemistry, and Mathematics, covering all relevant topics for KCET.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Updated to Current Syllabus</h3>
              <p className="text-gray-600">Regularly revised to align with the latest KCET syllabus and examination guidelines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Expertly Crafted Resources</h3>
              <p className="text-gray-600">Developed by experienced educators and professionals to guarantee high-quality and accurate content.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Diverse Practice Questions</h3>
              <p className="text-gray-600">A variety of question formats, including multiple-choice and numerical problems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Realistic Mock Tests</h3>
              <p className="text-gray-600">Full-length mock exams that replicate the actual KCET experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Flexible Learning Formats</h3>
              <p className="text-gray-600">Available in both printed and digital formats to suit various study preferences.</p>
            </div>
          </div>

          {/* <div className="mt-8">
            <button className="bg-yellow-300 hover:bg-red-300 text-white py-2 px-4 rounded-lg text-sm sm:text-lg transition duration-300">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default KcetStudyMaterial;

import React from 'react';

const FoundationStudyMaterial = () => {
  return (
    <section>
      {/* Foundation Study Material Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#2e6982, #c3e6ec,#2e6982, #a7d1d9)'}}>
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Foundation Study Material</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto ">
            Customizable, engaging, and expertly crafted study material for classes 6 to 10, designed to enhance learning and promote academic success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Customizable Study Material</h3>
              <p className="text-gray-600">Tailored materials featuring your school’s logo and name to align with your specific curriculum.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">Extensive resources for Mathematics, Science, English, Social Studies, and more, focusing on grades 6 to 10.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Engaging and Interactive</h3>
              <p className="text-gray-600">Incorporates quizzes, exercises, and visual aids to make learning more engaging and understandable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Expertly Crafted Content</h3>
              <p className="text-gray-600">Developed by experienced educators and based on educational research to ensure effective learning strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Student-Centric Design</h3>
              <p className="text-gray-600">User-friendly layout with plenty of practice questions and revision notes to reinforce learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Affordable Packages</h3>
              <p className="text-gray-600">Cost-effective pricing with special bulk discounts for schools, ensuring accessibility for all students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Teacher Support Resources</h3>
              <p className="text-gray-600">Includes guides for educators and teacher training workshops to help maximize the impact of materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Feedback and Improvement</h3>
              <p className="text-gray-600">Regularly updated content based on feedback from schools and the latest educational trends.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Testimonials and Success Stories</h3>
              <p className="text-gray-600">Showcase real-world impact with testimonials and case studies illustrating improved student performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Easy Ordering Process</h3>
              <p className="text-gray-600">Streamlined online ordering with quick delivery and dedicated customer support for any inquiries.</p>
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

export default FoundationStudyMaterial;

import React from 'react'

function KcetBlogs() {
  return (
    <>
  <div className="space-y-12 animate-fade-in">
    {/* KCET 2025 content */}
    <section className="text-center space-y-4">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">KCET 2025: Date, Notification, Application Form & More</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">All details about KCET 2025 are available here...</p>
      <div className="flex justify-center space-x-6 mt-6">
        <button className="px-6 py-3 bg-[#2E6982] text-white rounded-full hover:bg-[#225160] transition-transform duration-300 transform hover:scale-105">Start Preparing</button>
      </div>
    </section>

    {/* KCET 2025 Overview */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Overview</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        Karnataka Examinations Authority (KEA) will conduct KCET 2025 for admissions to undergraduate courses in 
        Engineering, Architecture, and Pharmacy. The exam will take place in the first week of May 2025. Stay updated 
        with the official notification and application process.
      </p>
    </section>

    {/* KCET 2025 Important Dates */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Important Dates (Tentative)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2">Event</th>
            <th className="border-b-2 py-2">Date 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b py-2">Release of Application</td>
            <td className="border-b py-2">1st week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">End of Application Process</td>
            <td className="border-b py-2">Last week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Admit Card Release</td>
            <td className="border-b py-2">3rd week of April 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">KCET 2025 Exam</td>
            <td className="border-b py-2">1st week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Result Declaration</td>
            <td className="border-b py-2">Last week of May 2025</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* KCET 2025 Eligibility */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Eligibility Criteria</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        <li><strong>Nationality:</strong> Indian Nationals are eligible.</li>
        <li><strong>Educational Qualification:</strong> Passed 12th with Mathematics, Physics, Chemistry as compulsory subjects for Engineering; Biology for Medical courses.</li>
        <li><strong>Minimum Marks:</strong> 45% for General, 40% for reserved categories in 12th class exams.</li>
      </ul>
    </section>

    {/* KCET 2025 Application Process */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Application Process</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        Candidates need to register online by visiting the official KEA website. After registration, fill in personal 
        details, upload documents, and pay the fee to complete the application process. Corrections can be made online 
        during the specified window in April 2025.
      </p>
    </section>

    {/* KCET 2025 Syllabus */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Syllabus</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The syllabus for KCET 2025 includes topics from Physics, Chemistry, and Mathematics or Biology based on the 
        candidate's choice of course. Aspirants are advised to thoroughly study the 12th standard syllabus as 
        prescribed by the Karnataka Board.
      </p>
    </section>
  </div>
    </>
  )
}

export default KcetBlogs
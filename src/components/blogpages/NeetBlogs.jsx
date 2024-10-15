import React from 'react'

function NeetBlogs() {
  return (
  <>
  <div className="space-y-12 animate-fade-in">
    {/* NEET 2025 content */}
    <section className="text-center space-y-4">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">NEET 2025: Syllabus, Exam Date, Eligibility & More</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">A complete guide for NEET 2025 aspirants...</p>
      <div className="flex justify-center space-x-6 mt-6">
        <button className="px-6 py-3 bg-[#2E6982] text-white rounded-full hover:bg-[#225160] transition-transform duration-300 transform hover:scale-105">Start Preparing</button>
      </div>
    </section>

    {/* NEET 2025 Overview */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Overview</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        National Testing Agency (NTA) will conduct the NEET 2025 Exam for MBBS and BDS admissions along with Ayush
        Courses. The exam will be conducted offline in the first week of May 2025. The application process will begin in
        December 2024. Stay updated with syllabus changes and focus on the complete syllabus for better performance.
      </p>
    </section>

    {/* NEET 2025 Important Dates */}
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
            <td className="border-b py-2">1st week of December 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">End of the application process</td>
            <td className="border-b py-2">Last week of December 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">Correction window opens</td>
            <td className="border-b py-2">3rd to last week of January 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Availability of Admit card</td>
            <td className="border-b py-2">4th week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">NEET 2025 Exam</td>
            <td className="border-b py-2">1st week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Availability of Answer key</td>
            <td className="border-b py-2">2nd week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Declaration of Result</td>
            <td className="border-b py-2">1st week of June 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Starting of Counselling</td>
            <td className="border-b py-2">2nd week of June 2025</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* NEET 2025 Eligibility */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Eligibility Criteria</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        <li><strong>Nationality:</strong> Indian Nationals, NRIs, PIO, OCI, and Foreign Nationals are eligible.</li>
        <li><strong>Age Limit:</strong> Must be 17 years old by 31st December 2025. No upper age limit.</li>
        <li><strong>Qualification:</strong> Passed 12th with Physics, Chemistry, Biology/Biotechnology, and English (50% marks for UR, 40% for SC/ST/OBC, 45% for PwD).</li>
        <li><strong>Attempts:</strong> No limit on attempts.</li>
      </ul>
    </section>

    {/* NEET 2025 Application Form */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Application Form</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The NEET 2025 application process will be online only. Follow these steps: Register → Fill Details → Upload Photo & Signature → Pay Fee → Print Receipt.
        Corrections can be made online from the 3rd to last week of January 2025.
      </p>
    </section>

    {/* NEET 2025 Syllabus */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Syllabus</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The NEET syllabus covers Physics, Chemistry, Botany, and Zoology across 97 chapters. Students should focus on the entire syllabus to score high.
      </p>
    </section>
  </div>
  </>
  )
}

export default NeetBlogs
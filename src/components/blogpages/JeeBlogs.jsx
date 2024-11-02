import React from 'react';

function JeeBlogs() {
  return (
    <>
      <div className="space-y-12 animate-fade-in">
        {/* JEE Main 2025 Header */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">JEE Main 2025 Exam Pattern (Revised)</h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">New Paper Pattern, Total Marks, Number of Questions</p>
        </section>

        {/* Exam Pattern Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Exam Pattern Overview</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            The JEE Main 2025 exam pattern has been revised by NTA, removing optional questions in Section B for Papers 1 and 2. The B.E/B.Tech exam will consist of 75 questions covering Physics, Chemistry, and Mathematics, totaling 300 marks. Each section will have 25 questions, including 20 multiple-choice questions (MCQs) and 5 numerical value questions (NVQs), all mandatory.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            The exam will be conducted in two sessions: January 22-31 and April 1-8, 2025. The JEE exam pattern varies for Paper 1 (B.E/B.Tech) and Paper 2 (B.Arch/B.Plan). Check below for more details.
          </p>
        </section>

        {/* Detailed Exam Pattern Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Detailed Exam Pattern</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-2">Paper</th>
                <th className="border-b-2 py-2">Subjects</th>
                <th className="border-b-2 py-2">Question Format</th>
                <th className="border-b-2 py-2 ">Total Questions</th>
                <th className="border-b-2 py-2">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2">B.E/B.Tech (Paper 1)</td>
                <td className="border-b py-2">Maths, Physics, Chemistry</td>
                <td className="border-b py-2">MCQs + Numerical Value Questions</td>
                <td className="border-b py-2">75 (25 per subject)</td>
                <td className="border-b py-2">300</td>
              </tr>
              <tr>
                <td className="border-b py-2">B.Arch (Paper 2A)</td>
                <td className="border-b py-2">Maths, Aptitude, Drawing</td>
                <td className="border-b py-2">MCQs + Drawing Questions</td>
                <td className="border-b py-2">82</td>
                <td className="border-b py-2">400</td>
              </tr>
              <tr>
                <td className="border-b py-2">B.Plan (Paper 2B)</td>
                <td className="border-b py-2">Maths, Aptitude, Planning</td>
                <td className="border-b py-2">MCQs + Numerical Value Questions</td>
                <td className="border-b py-2">100</td>
                <td className="border-b py-2">400</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Marking Scheme */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Marking Scheme</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            For MCQs, candidates earn 4 marks for each correct answer, with a penalty of -1 for incorrect answers. Numerical value questions follow the same marking scheme. Drawing questions in B.Arch are evaluated out of 100 marks each, with no negative marking.
          </p>
        </section>

        {/* Syllabus */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">JEE Main 2025 Syllabus</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            The National Testing Agency has released the JEE Main 2025 syllabus on the official website, jeemain.nta.nic.in. Students appearing for the entrance test should familiarize themselves with the JEE Mains syllabus to create an effective study plan. Important topics in Physics, Chemistry, and Mathematics are covered in the syllabus.
          </p>
        </section>

        {/* Mock Test */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">JEE Main 2025 Mock Test</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            The exam authority will release the JEE Main Mock Test 2025 on the official website. The mock test is designed to simulate the real exam environment, covering questions from Physics, Chemistry, and Mathematics to help students evaluate their performance, identify weak areas, and improve exam strategies.
          </p>
        </section>

        {/* Sample Papers */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">JEE Main 2025 Sample Papers</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
            Prepare for JEE Main 2025 with a comprehensive collection of sample papers. These papers are crafted to mirror the actual exam, helping students practice effectively and boost their confidence. By solving JEE Main Sample Papers, aspirants can gauge their readiness for the exam.
          </p>
        </section>
      </div>
    </>
  );
}

export default JeeBlogs;

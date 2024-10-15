import React, { useState } from 'react';
import JeeBlogs from './blogpages/JeeBlogs';
import NeetBlogs from './blogpages/NeetBlogs';
import KcetBlogs from './blogpages/KcetBlogs';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState('NEET 2025');

  const handleBlogChange = (e) => {
    setSelectedBlog(e.target.value);
  };

  const renderBlogContent = () => {
    switch (selectedBlog) {
      case 'JEE Main 2025':
        return <JeeBlogs />;
      case 'NEET 2025':
        return <NeetBlogs />;
      case 'KCET 2025':
        return <KcetBlogs />;
      default:
        return <NeetBlogs />;
    }
  };

  return (
    <>
      <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl pt-8 text-yellow-400">
        <h1>BLOGS FOR JEE, NEET & KCET PREPARATION</h1>
      </div>
      <div className="max-w-7xl p-8 mx-auto space-y-12">
        {/* Dropdown Menu */}
        <div className="flex justify-center mb-8">
          <select
            className="
            border-none outline-none
              w-full sm:w-40 md:w-48 lg:w-64 
              px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3
              text-sm sm:text-sm md:text-base
              bg-[#2E6982] text-white rounded-full
              hover:bg-[#225160] transition ease-in-out duration-300
            "
            value={selectedBlog}
            onChange={handleBlogChange}
          >
            <option className="text-xs sm:text-sm md:text-base w-50" value="JEE Main 2025">JEE Main 2025</option>
            <option className="text-xs sm:text-sm md:text-base w-50" value="NEET 2025">NEET 2025</option>
            <option className="text-xs sm:text-sm md:text-base w-50" value="KCET 2025">KCET 2025</option>
          </select>
        </div>

        {/* Render selected blog content */}
        {renderBlogContent()}
      </div>
    </>
  );
};

export default Blogs;

// Example using Intersection Observer API to load the image lazily
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClickArrow from './ClickArrow';

const StudyMaterial = ({ title, target }) => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBgImage('https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg');
            observer.disconnect(); // Stop observing after the image is loaded
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.study-material'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="study-material relative text-center text-[#2E6982] p-8 overflow-hidden rounded-xl ">
      {/* Lazy loaded Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 rounded-xl"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          border: '1px solid #2e6982'
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 p-16">
        <h1 className="text-3xl font-bold">{title}</h1>

        {/* Include the arrow button to navigate */}
        <div className="mt-16 p-8 hover:text-[#225160] cursor-pointer ">
          <Link className="font-extrabold" to={target}>
            Read More
          </Link>
          <ClickArrow target={target} />
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;

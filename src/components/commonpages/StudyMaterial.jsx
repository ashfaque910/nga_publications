import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClickArrow from './ClickArrow';

const StudyMaterial = ({ title, target }) => {
  const [bgImage, setBgImage] = useState(''); // Final high-resolution image
  const [lowResImage, setLowResImage] = useState('https://img.freepik.com/free-vector/small-placeholder.jpg'); // Placeholder image

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const highResImage = new Image();
            highResImage.src = 'https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg';
            highResImage.onload = () => setBgImage(highResImage.src); // Only set the high-res image once it's fully loaded

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
    <div className="study-material relative text-center text-[#2E6982] p-8 overflow-hidden rounded-xl">
      {/* Lazy loaded Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0 rounded-xl"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : `url(${lowResImage})`,
          filter: bgImage ? 'none' : 'blur(5px)', // Blur effect on placeholder image
          transition: 'filter 0.5s ease-in-out', // Smooth transition to the high-res image
          border: '1px solid #2e6982',
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

"use client";

import { useEffect } from "react";

const GrowFromTopImage = ({ src, alt }) => {
  useEffect(() => {
    const image = document.querySelector(".image");
    image.classList.add("animateFromTop");
  }, []);

  return (
    <div className="container">
      <img src={src} alt={alt} className="image" />
      <style jsx>{`
        .container {
          overflow: hidden;
          width: 100%; /* Adjust width as needed */
          height: 0;
        }

        .image {
          width: 100%;
          height: auto;
        }

        .animateFromTop {
          animation: growFromTop 1s ease forwards;
        }

        @keyframes growFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowFromTopImage;

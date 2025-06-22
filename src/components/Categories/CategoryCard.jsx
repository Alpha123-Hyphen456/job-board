// src/components/Categories/CategoryCard.jsx
import React from 'react';

function CategoryCard({ iconClass, title, aosDelay }) {
  return (
    <div
      className="bg-[var(--card-background)] rounded-lg shadow-md p-6 text-center flex flex-col items-center justify-center gap-4
                   transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      data-aos="fade-up" // Apply data-aos here
      data-aos-delay={aosDelay} // Use the delay prop here
    >
      <i className={`${iconClass} text-5xl text-[var(--secondary-color)] mb-2`}></i>
      <h3 className="text-lg font-semibold text-[var(--primary-color)]">{title}</h3>
    </div>
  );
}

export default CategoryCard;
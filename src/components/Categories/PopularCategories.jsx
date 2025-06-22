// src/components/Categories/PopularCategories.jsx
import React from 'react';
import CategoryCard from './CategoryCard';

function PopularCategories() {
  const categories = [
    { icon: 'fas fa-car', title: 'AUTOMOTIVE JOBS', delay: 0 },
    { icon: 'fas fa-hard-hat', title: 'CONSTRUCTION/FACILITIES', delay: 100 },
    { icon: 'fas fa-chart-line', title: 'ACCOUNTING & FINANCE', delay: 200 },
    { icon: 'fas fa-medkit', title: 'HEALTHCARE', delay: 300 },
    { icon: 'fas fa-graduation-cap', title: 'EDUCATION & TRAINING', delay: 400 },
    { icon: 'fas fa-paint-brush', title: 'DESIGN, ART & MULTIMEDIA', delay: 500 },
    { icon: 'fas fa-utensils', title: 'RESTAURANT/FOOD SERVICE', delay: 600 },
    { icon: 'fas fa-truck', title: 'TRANSPORTATION/LOGISTICS', delay: 700 },
  ];

  return (
    <section className="mb-12" data-aos="fade-up"> {/* Added data-aos here */}
      <h2 className="text-center text-4xl font-semibold mb-8 text-[var(--primary-color)] md:text-3xl">Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            iconClass={category.icon}
            title={category.title}
            // No need for individual aosDelay if parent has fade-up,
            // unless you want staggered animations.
            // If you want staggered, add data-aos="fade-up" data-aos-delay={category.delay} to CategoryCard
          />
        ))}
      </div>
      <a
        href="#"
        className="block w-fit mx-auto mt-10 px-8 py-4 bg-green-500 text-white rounded-md font-semibold
                      transition-colors duration-300 ease-in-out hover:bg-green-600"
      >
        BROWSE ALL CATEGORIES
      </a>
    </section>
  );
}

export default PopularCategories;
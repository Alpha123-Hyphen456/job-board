
import React from 'react';

function HeroSection({ jobCount }) {
  const handleSearch = () => {
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    console.log(`Searching for: ${jobTitle} in ${location}`);
  };

  return (
    <section
      className="bg-[url('https://placehold.co/1920x600/283747/283747')] bg-no-repeat bg-center bg-cover
                 text-white py-24 text-center relative z-10 min-h-[400px] rounded-lg shadow-lg mb-10"
      style={{
        backgroundImage: "url('https://placehold.co/1920x600/283747/283747?text=Job+Board')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-[-1] rounded-lg"></div>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-5 leading-tight md:text-4xl sm:text-3xl">Find Your Dream Job</h1>
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden mt-8 shadow-xl">
          <input
            type="text"
            id="jobTitle"
            placeholder="Job title, keywords or company name"
            className="flex-1 p-4 border-none outline-none text-lg text-[var(--text-dark)] md:rounded-l-lg md:rounded-tr-none rounded-t-lg"
          />
          <input
            type="text"
            id="location"
            placeholder="City, province or region"
            className="flex-1 p-4 border-none outline-none text-lg text-[var(--text-dark)] md:rounded-none"
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="bg-[var(--secondary-color)] text-white p-4 text-lg cursor-pointer transition-colors duration-300 ease-in-out
                       flex items-center justify-center gap-2 md:rounded-r-lg md:rounded-bl-none rounded-b-lg hover:bg-[#0056b3]"
          >
            Search <i className="fas fa-search"></i>
          </button>
        </div>
        <p className="mt-5 text-lg text-white/80 transition-colors duration-300 ease-in-out hover:text-white hover:underline">
          Or browse job offers by <a href="#">category</a>
        </p>
        <p className="mt-4 text-xl font-semibold">
          We have <span id="jobCount">{jobCount}</span> job offers for you!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;

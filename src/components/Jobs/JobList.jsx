// src/components/Jobs/JobList.jsx
import React from 'react';
import JobItem from './JobItem';

/**
 * Reusable component for displaying a list of jobs.
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the job list section.
 * @param {Array<object>} props.jobs - An array of job objects to display.
 */
function JobList({ title, jobs }) {
  return (
    <>
      <div className="flex justify-between items-center mb-5 text-[var(--primary-color)]">
        <h2 className="text-2xl font-semibold md:text-xl">{title}</h2>
        <div className="flex gap-2">
          <i className="fas fa-angle-left cursor-pointer text-xl text-[var(--text-light)] hover:text-[var(--secondary-color)] transition-colors duration-300"></i>
          <i className="fas fa-angle-right cursor-pointer text-xl text-[var(--text-light)] hover:text-[var(--secondary-color)] transition-colors duration-300"></i>
        </div>
      </div>
      <div>
        {jobs.map((job, index) => (
          <JobItem
            key={job.id} // Use a unique key for each item
            iconClass={job.icon}
            title={job.title}
            type={job.type}
            company={job.company}
            location={job.location}
            isLast={index === jobs.length - 1} // Pass prop to handle last item border
          />
        ))}
      </div>
    </>
  );
}

export default JobList;

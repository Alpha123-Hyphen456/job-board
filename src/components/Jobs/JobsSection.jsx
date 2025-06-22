// src/components/Jobs/JobsSection.jsx
import React from 'react';
import JobList from './JobList';

/**
 * Jobs Section component, containing Recent Jobs and Job Spotlight lists.
 * @param {object} props - The component props.
 * @param {Array<object>} props.recentJobs - Array of job objects for the "Recent Jobs" list.
 * @param {Array<object>} props.jobSpotlight - Array of job objects for the "Job Spotlight" list.
 */
function JobsSection({ recentJobs, jobSpotlight }) {
  return (
    <section className="flex flex-col lg:flex-row gap-8 mt-12">
      <div className="flex-1 bg-[var(--card-background)] rounded-lg shadow-md p-6" >
        <JobList title="Recent Jobs" jobs={recentJobs} />
      </div>
      <div className="flex-1 bg-[var(--card-background)] rounded-lg shadow-md p-6" >
        <JobList title="Job Spotlight" jobs={jobSpotlight} />
      </div>
    </section>
  );
}

export default JobsSection;

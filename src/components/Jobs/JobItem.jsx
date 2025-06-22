import React from 'react';

function JobItem({ iconClass, title, type, company, location, isLast }) {
  const typeTagClass = type === 'FULL TIME' ? 'full-time-tag' : 'part-time-tag';

  return (
    <div className={`flex items-start gap-4 pb-4 ${!isLast ? 'border-b border-gray-200 mb-5' : ''} md:flex-col md:items-center md:text-center`}>
      <i className={`${iconClass} text-2xl text-[var(--secondary-color)] mt-1 md:mb-2`}></i>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-[var(--primary-color)] mb-1">
          {title} <span className={`job-type-tag ${typeTagClass}`}>{type}</span>
        </h3>
        <p className="text-sm text-[var(--text-light)]">{company} - {location}</p>
      </div>
    </div>
  );
}

export default JobItem;

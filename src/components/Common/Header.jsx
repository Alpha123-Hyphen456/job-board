// src/components/Common/Header.jsx
import React from 'react';

function Header({ isLoggedIn, onSignOut, onSignInRedirect, onHomeRedirect }) {
  return (
    <header className="bg-[var(--card-background)] shadow-md py-4">
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-5 gap-4">
        {/* Logo and site title - clicking returns to home */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onHomeRedirect(); }} // Prevent default link behavior and call onHomeRedirect
          className="flex items-center font-bold text-2xl text-[var(--primary-color)]"
        >
          <i className="fas fa-briefcase mr-2 text-[var(--secondary-color)]"></i> WorkScout
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--text-light)] md:text-base text-sm">
          <li>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onHomeRedirect(); }} // Ensure HOME link calls onHomeRedirect
              className="font-medium hover:text-[var(--secondary-color)] relative navbar-link"
            >
              HOME
            </a>
          </li>
          <li><a href="#" className="font-medium hover:text-[var(--secondary-color)] relative navbar-link">PAGES</a></li>
          <li><a href="#" className="font-medium hover:text-[var(--secondary-color)] relative navbar-link">FOR CANDIDATES</a></li>
          <li><a href="#" className="font-medium hover:text-[var(--secondary-color)] relative navbar-link">FOR EMPLOYERS</a></li>
          <li><a href="#" className="font-medium hover:text-[var(--secondary-color)] relative navbar-link">BLOG</a></li>
        </ul>
        <div className="flex gap-4 items-center">
          {isLoggedIn ? (
            <>
              <span className="text-[var(--primary-color)] font-semibold mr-2">Welcome, User!</span>
              <button
                onClick={onSignOut}
                className="px-4 py-2 rounded-md font-medium cursor-pointer border border-transparent
                               bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onSignInRedirect}
                className="px-4 py-2 rounded-md font-medium cursor-pointer border border-transparent
                               bg-[var(--secondary-color)] text-white hover:bg-[#0056b3] transition-colors duration-300 ease-in-out"
              >
                SIGN UP
              </button>
              <button
                onClick={onSignInRedirect}
                className="px-4 py-2 rounded-md font-medium cursor-pointer border border-[var(--border-color)]
                               bg-[var(--card-background)] text-[var(--text-dark)] hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]
                               transition-colors duration-300 ease-in-out"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
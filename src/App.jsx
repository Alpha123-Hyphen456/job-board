// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react'; // Make sure useCallback is imported
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import MessageBox from './components/Common/MessageBox';
import AuthForm from './components/Auth/AuthForm';
import HeroSection from './components/Hero/HeroSection';
import PopularCategories from './components/Categories/PopularCategories';
import JobsSection from './components/Jobs/JobsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [messageVisible, setMessageVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // --- START OF FIX ---
  // Define showMessage first, so it's available to other handlers
  const showMessage = useCallback((msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setMessageVisible(true);
    const timer = setTimeout(() => {
      setMessageVisible(false);
      setMessage('');
    }, 3000);
    return () => clearTimeout(timer); // Cleanup on unmount or re-render
  }, []); // Empty dependency array means this function is memoized and won't change on re-renders

  // --- END OF FIX ---

  // This useEffect ensures AOS initializes *after* the component mounts
  // and the DOM elements are available. It runs only once due to the empty dependency array [].
  useEffect(() => {
    console.log('App: Initializing AOS...');
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    // This line is important to refresh AOS if content changes dynamically
    AOS.refresh();
    console.log('App: AOS initialized and refreshed.');
  }, [currentPage]); // Keep currentPage in dependency array to refresh AOS on page change

  const handleSignIn = () => {
    setIsLoggedIn(true);
    showMessage('Logged in successfully!', 'success');
    setCurrentPage('home'); // Redirect to home after successful login
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    showMessage('Logged out successfully!', 'success');
    setCurrentPage('home'); // After sign out, also redirect to home
  };

  const handleSignInRedirect = () => {
    setCurrentPage('login');
    console.log('App: Redirecting to login page. currentPage:', 'login'); // Add this log for debugging
  };

  const handleHomeRedirect = () => {
    setCurrentPage('home');
    console.log('App: Redirecting to home page. currentPage:', 'home'); // Add this log for debugging
  };

  // Dummy job data (kept for completeness)
  const recentJobs = [
    { id: 1, icon: 'fas fa-laptop-code', title: 'Software Engineer', type: 'FULL TIME', company: 'Tech Solutions', location: 'New York, NY' },
    { id: 2, icon: 'fas fa-pencil-alt', title: 'Content Writer', type: 'PART TIME', company: 'Creative Hub', location: 'Remote' },
    { id: 3, icon: 'fas fa-user-tie', title: 'HR Manager', type: 'FULL TIME', company: 'Global Corp', location: 'London, UK' },
  ];

  const jobSpotlight = [
    { id: 4, icon: 'fas fa-briefcase', title: 'Project Manager', type: 'FULL TIME', company: 'Innovate Co.', location: 'San Francisco, CA' },
    { id: 5, icon: 'fas fa-chart-bar', title: 'Data Analyst', type: 'FULL TIME', company: 'Data Insights', location: 'Berlin, Germany' },
    { id: 6, icon: 'fas fa-hands-helping', title: 'Customer Support', type: 'PART TIME', company: 'Service Pro', location: 'Remote' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        onSignOut={handleSignOut}
        onSignInRedirect={handleSignInRedirect}
        onHomeRedirect={handleHomeRedirect}
      />
      <main className="flex-grow max-w-7xl mx-auto px-5 py-8 w-full">
        <MessageBox message={message} type={messageType} isVisible={messageVisible} />

        {console.log('App: Current page to render:', currentPage)} {/* New debug log */}

        {currentPage === 'home' && (
          <>
            <HeroSection jobCount={123} />
            <PopularCategories />
            <JobsSection recentJobs={recentJobs} jobSpotlight={jobSpotlight} />
          </>
        )}

        {currentPage === 'login' && (
          <div className="flex justify-center items-center h-full py-10">
            <AuthForm onSignIn={handleSignIn} showMessage={showMessage} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
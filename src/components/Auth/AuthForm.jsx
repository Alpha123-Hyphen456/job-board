// src/components/Auth/AuthForm.jsx
import React, { useState, useEffect } from 'react';

/**
 * Authentication Form component for user login and sign-up.
 * @param {object} props - The component props.
 * @param {function} props.onSignIn - Callback function to execute on successful sign-in.
 * @param {function} props.showMessage - Function to display a message using a global message box.
 */
function AuthForm({ onSignIn, showMessage }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Reset form fields when switching between login and signup modes
  useEffect(() => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }, [isLoginMode]);

  /**
   * Handles the form submission for both login and sign-up.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      showMessage('Email and password are required!', 'error');
      return;
    }

    if (!isLoginMode) { // Sign Up mode
      if (!username) {
        showMessage('Username is required for sign up!', 'error');
        return;
      }
      if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
      }
      console.log('Simulated Sign Up:', { username, email, password });
      showMessage('Sign Up successful! Redirecting...', 'success');
    } else { // Log In mode
      console.log('Simulated Log In:', { email, password });
      showMessage('Log In successful! Redirecting...', 'success');
    }

    // Simulate successful authentication and call the parent's onSignIn
    onSignIn();
  };

  return (
    <div className="bg-[var(--card-background)] rounded-lg shadow-lg p-10 w-full max-w-md text-center">
      <div className="flex justify-center mb-6 bg-gray-200 rounded-md overflow-hidden">
        <button
          id="loginTab"
          className={`flex-1 py-3 px-5 border-none bg-transparent text-[var(--text-light)] text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out
                      ${isLoginMode ? 'bg-[var(--secondary-color)] text-white shadow-md' : ''}`}
          onClick={() => setIsLoginMode(true)}
        >
          Log In
        </button>
        <button
          id="signupTab"
          className={`flex-1 py-3 px-5 border-none bg-transparent text-[var(--text-light)] text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out
                      ${!isLoginMode ? 'bg-[var(--secondary-color)] text-white shadow-md' : ''}`}
          onClick={() => setIsLoginMode(false)}
        >
          Sign Up
        </button>
      </div>

      <h2 id="formTitle" className="text-3xl mb-6 text-[var(--primary-color)]">
        {isLoginMode ? 'Log In to Your Account' : 'Create a New Account'}
      </h2>

      <form id="authForm" onSubmit={handleSubmit}>
        {!isLoginMode && (
          <div className="mb-5 text-left">
            <label htmlFor="username" className="block mb-2 font-medium text-[var(--text-dark)]">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full p-3 border border-[var(--border-color)] rounded-md text-base text-[var(--text-dark)] transition-colors duration-300 ease-in-out focus:border-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,123,255,0.25)]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="mb-5 text-left">
          <label htmlFor="email" className="block mb-2 font-medium text-[var(--text-dark)]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-[var(--border-color)] rounded-md text-base text-[var(--text-dark)] transition-colors duration-300 ease-in-out focus:border-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,123,255,0.25)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 text-left">
          <label htmlFor="password" className="block mb-2 font-medium text-[var(--text-dark)]">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 border border-[var(--border-color)] rounded-md text-base text-[var(--text-dark)] transition-colors duration-300 ease-in-out focus:border-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,123,255,0.25)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLoginMode && (
          <div className="mb-5 text-left">
            <label htmlFor="confirm-password" className="block mb-2 font-medium text-[var(--text-dark)]">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-[var(--border-color)] rounded-md text-base text-[var(--text-dark)] transition-colors duration-300 ease-in-out focus:border-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,123,255,0.25)]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-4 bg-[var(--secondary-color)] text-white rounded-md text-lg font-semibold cursor-pointer
                     transition-all duration-300 ease-in-out mt-4 hover:bg-[#0056b3] hover:-translate-y-0.5"
        >
          {isLoginMode ? 'Log In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;

// src/components/Common/MessageBox.jsx
import React from 'react';

/**
 * A message box component to display success or error messages.
 * @param {object} props - The component props.
 * @param {string} props.message - The message content to display.
 * @param {'success' | 'error'} props.type - The type of message, which determines its styling.
 * @param {boolean} props.isVisible - Controls the visibility of the message box.
 */
function MessageBox({ message, type, isVisible }) {
  if (!isVisible) return null;

  return (
    <div
      className={`message-box ${type === 'success' ? 'success' : 'error'}
                  fixed top-20 left-1/2 -translate-x-1/2 z-50
                  px-6 py-3 rounded-lg shadow-lg text-sm md:text-base`}
      role="alert"
    >
      {message}
    </div>
  );
}

export default MessageBox;
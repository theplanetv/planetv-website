import React, { useState } from 'react';

interface FloatingLabelTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelText: React.FC<FloatingLabelTextProps> = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block w-full px-4 py-2 text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isFocused || props.value ? 'pt-4 pb-1' : 'pt-2 pb-2'
          }`}
      />
      <label
        className={`absolute top-0 left-0 rounded px-4 py-2 text-gray-700 transition-all duration-300 origin-top-left z-1 ${isFocused || props.value
          ? 'scale-75 -translate-y-4 text-blue-500 bg-white'
          : 'scale-100 translate-y-0'
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelText;

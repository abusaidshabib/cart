import React from 'react';

const Button = ({ children }) => {
  return <button className="bg-secondary/40 px-5 py-2 text-white rounded-md text-sm">{children}</button>;
};

export default Button;
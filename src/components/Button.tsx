import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black  py-2 px-4 rounded-xl transition duration-300 ease-in-out cursor-pointer hover:hover:text-customBlue"
    > 
      {text}
    </button>
  );
};

export default Button;

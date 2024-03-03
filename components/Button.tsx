import React from "react";

type ButtonProps = {
  width: string;
  color: string;
  title: string;
};

const Button = ({ width, color, title }: ButtonProps) => {
  return (
    <button
      className={`w-[${width}] bg-[${color}] text-center ml-3 rounded p-2 shadow-gray-500/50`}
    >
      {title}
    </button>
  );
};

export default Button;

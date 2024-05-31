import React from "react";

export const Button = ({ text, sizes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 rounded-full text-white ${sizes}`}
    >
      <b>{text}</b>
    </button>
  );
};

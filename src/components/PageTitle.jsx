import React from "react";

export const PageTitle = ({ title }) => {
  return (
    <div className="py-5 px-3 border-1 border-b sticky top-0 z-30 bg-gray">
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};

// NotFound.js
import React from "react";

const NotFound = ({ onClick }) => {
  return (
    <div className="container items-center flex flex-col justify-center h-[calc(100vh-20px)]">
      <h1 className="text-4xl font-bold text-center pb-4">
        We encountered an error while fetching the news !
      </h1>
      <p className="pb-4">Please Try Again</p>
      <a
        className="text-gray-900 border border-gray-900 py-1 px-4 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        Retry
      </a>
    </div>
  );
};

export default NotFound;

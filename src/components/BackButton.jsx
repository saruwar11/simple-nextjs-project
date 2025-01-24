"use client";
import React from "react";

const BackButton = () => {
  return (
    <div className="mt-6">
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;

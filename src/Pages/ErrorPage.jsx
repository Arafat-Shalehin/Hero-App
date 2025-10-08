import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">

      <img
        src="/src/assets/error-404.png"
        alt="404 Illustration"
        className="w-80 mb-6"
      />

      <h1 className="text-4xl font-semibold text-gray-800 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      <button className="px-6 py-2 bg-gradient-to-l from-purple-400 to-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
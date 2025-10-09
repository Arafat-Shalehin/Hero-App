import React from "react";

const AppNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <img
        src="/src/assets/App-Error.png" 
        alt="App Not Found Illustration"
        className="w-80 mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-2 uppercase">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        The App you are requesting is not found on our system.
        Please try another apps
      </p>

      <a href="/apps">
        <button className="px-6 py-2 bg-gradient-to-l from-purple-400 to-purple-600  text-white rounded-md shadow-md hover:bg-purple-700 transition">
          Go Back!
        </button>
      </a>
    </div>
  );
};

export default AppNotFound;

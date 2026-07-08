import React from 'react'
import { useState } from 'react';
const OsButton = () => {
    const Os = ["Linux" , " Windows"];
    const [SelectedOs, setSelectedOs] = useState("Linux");
  return (
    <div className="flex justify-center mt-4">
        <div className="flex space-x-4 py-1 w-[250px] justify-center bg-blue-100 rounded-lg">
      {Os.map((os) => (
        <button 
          key={os} 
          className={` px-6 py-2 rounded-lg ${SelectedOs === os ? 'bg-white text-blue-700' : 'bg-blue-100 text-gray-700'}`}
          onClick={() => setSelectedOs(os)}
        >
          {os}
        </button>
      ))}
      </div>
    </div>
  )
};

export default OsButton;

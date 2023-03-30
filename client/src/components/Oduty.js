import React from "react";

const Oduty = () => {
  return (
    <div>
        <div>
      <a
        href="#_"
        class="relative m-5 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      >
        <span class="absolute w-0 h-0 transition-all duration-100 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative font-bold">10-8 (On Duty)</span>
      </a>
      <a
        href="#_"
        class="relative m-5 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      >
        <span class="absolute w-0 h-0 transition-all duration-1000 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative font-bold">10-7 (Off Duty)</span>
      </a>
      </div>
    </div>
  );
};

export default Oduty;

import React, { useState } from 'react';

const NcicLookup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Hello, ${firstName} ${lastName}!`);
    };
  return (
    <div>
    <div className="max-w-6xl mx-auto mt-8 bg-gray-800  p-8 rounded-lg shadow-md flex justify-evenly">
      <h2 className="text-2xl text-white font-medium">NCIC Lookup</h2>
      <form onSubmit={handleSubmit} className="flex ml-5">
      <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0 mr-5">
    <div class="w-full px-2 md:w-1/2">
      <input placeholder="First Name" class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name"/>
    </div>
    <div class="w-full px-2 md:w-1/2">
      <input placeholder="Last Name" class="w-full mr-9 h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_last"/>
    </div>
  </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Search</button>
      </form>
    </div>
    <div className="max-w-6xl mx-auto mt-8 bg-gray-800  p-8 rounded-lg shadow-md flex justify-evenly">
      <h2 className="text-2xl text-white font-medium">NCIC Vehicle Lookup</h2>
      <form onSubmit={handleSubmit} className="flex ml-5">
      <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0 mr-5">
    <div class="w-full px-2 md:w-1/2">
      <input placeholder="Plate Number (5MDS003)" class="w-96 mr-5 h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name"/>
    </div>
  </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Search</button>
      </form>
    </div>
    </div>
  )
}

export default NcicLookup
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div class="w-96 max-w-96 h-96 content-center">
  <form class="bg-neutral-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 className="text-blue-600 text-3xl font-bold">OnCode CAD/MDT</h1>
    <div class="mb-4">
      <label class="block text-white text-md mt-5 mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-white text-md mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-center">
        <Link to="/dash">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      </Link>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    OnCode Web Design and Consulting. All rights reserved.
  </p>
</div>
  )
}

export default Login
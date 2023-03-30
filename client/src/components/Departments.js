import React from "react";
import '../App.css';
import lspdseal from "./assets/images/lspdseal.png"
import civv from "./assets/images/civv.png"
import dispatch from "./assets/images/dispatchL.png"
import { Link, useNavigate } from "react-router-dom";

const Departments = () => {
  return (
    <div className="flex justify-center">
      <div class="flex justify-center m-5">
        <div class="block max-w-sm mt-10 rounded-lg bg-white text-center shadow-lg dark:bg-neutral-800">
          <div class="p-6 text-center">
            <h5 class="mb-2 text-xl font-medium leading-tight dark:text-neutral-50">
              Los Santos Police Department
            </h5>
            <img className="depLogo m-8" src={lspdseal}/>
            <Link to="/cad/onduty">
            <button class="bg-blue-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Go on Duty
            </button>
            </Link>
          </div>
        </div>
        
      </div>
      <div class="flex justify-center m-5">
        <div class="block max-w-sm mt-10 rounded-lg bg-white text-center shadow-lg dark:bg-neutral-800">
          <div class="p-6 text-center">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Civilian Portal
            </h5>
            <img className="depLogo m-8" src={civv}/>
            <Link to="/cad/civ">
            <button class="bg-blue-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Start your Life
            </button>
            </Link>
          </div>
        </div>
        
      </div>
      <div class="flex justify-center m-5">
        <div class="block max-w-sm mt-10 rounded-lg bg-white text-center shadow-lg dark:bg-neutral-800">
          <div class="p-6 text-center">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Dispatch Portal
            </h5>
            <img className="depLogo m-8" src={dispatch}/>
            <Link to="/cad/dispatch">
            <button class="bg-blue-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Start your Life
            </button>
            </Link>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Departments;

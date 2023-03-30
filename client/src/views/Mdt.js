import React from 'react';
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MenuAlt1Icon,
  XIcon,
} from '@heroicons/react/outline';
import Oduty from '../components/Oduty';
import NcicLookup from '../components/NcicLookup';
import DutyList from '../components/DutyList';

const Mdt = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
    

      {/* Main content */}
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-slate-800 shadow-md">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <div className="ml-4">
                <h1 className="text-xl font-bold leading-tight text-blue-300">
                  OnCode CAD System
                </h1>
              </div>
            </div>
           <h2 className="text-blue-300 font-bold text-xl">A-101</h2>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-700">
          <div className='mdtContainer'>
          <Oduty/>

          </div>
          <NcicLookup/>
          <div className='mt-10'>
          <DutyList/>
          </div>

          {/* Main content */}
        </main>
      </div>
    </div>
  );
};

export default Mdt;

import React from 'react'
import CallinForm from '../components/CallinForm'

const Civ = () => {
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


        </div>

        <div className='mt-10'>
        <CallinForm/>
        </div>

        {/* Main content */}
      </main>
    </div>
  </div>
  )
}

export default Civ
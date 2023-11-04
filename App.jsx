import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <body className="bg-slate-50 h-screen w-screen">
      <div
  className=" h-[31.5rem] w-screen"
  style={{ backgroundImage: 'url("backgroundImage-lybrateKeyboard.jpg.jpg")' }}
>
        
       
  <p className="ml-[30rem] text-[1.875rem] mt-10">
    BEAT TRAFFIC JAM AND CLINIC QUEUES
  </p>
  <p className="ml-[20rem] text-[2.625rem]">
    Get Doctor Consultation Anywhere , Anytime
  </p>
  <div className="bg-slate-500 h-[3.438rem] w-[87.75rem] ml-[4rem] mt-[5rem] flex flex-row">
    <input
      className="h-[3.438rem] w-[68.25rem]"
      type="text"
      placeholder="Enter Speciality Name (e.g. Dietitian, Dermatologist, Physchologist)"
    />
    <button className="bg-yellow-500 h-[3.438rem] w-[19.5rem] text-base border border-white text-white hover:pointer hover:bg-green-400 text-[1.5rem]">
      Search
    </button>
  </div>
  <div className="grid grid-col-7 grid-flow-col">
    <p className="ml-[18rem] mt-[1.5rem] text-[1.25rem]">Trending Topics:</p>
    <p className="ml-[-7rem] mt-[1.5rem] text-[1.25rem]">Celiac Disease</p>
    <p className="ml-[-8rem] mt-[1.5rem] text-[1.25rem]">Bipolar Disorder</p>
    <p className="ml-[-8rem] mt-[1.5rem] text-[1.25rem]">Fungal Infection</p>
    <p className="ml-[-8rem] mt-[1.5rem] text-[1.25rem]">Mental Disorders</p>
    <p className="ml-[-8rem] mt-[1.5rem] text-[1.25rem]">Heat Disease</p>
    <p className="ml-[-8rem] mt-[1.5rem] text-[1.25rem]">Diabetes</p>
  </div>
</div>
      </body>
    </>
  )
}

export default App

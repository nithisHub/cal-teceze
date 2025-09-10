import React, { useState } from 'react';
import { motion } from "framer-motion";

function Cal() {

  const cityList=["Atlanta"	,"Austin",	"Charlotte","Boston","Chicago","	Dallas",	"Denver",	'Honolulu',	"Houston",	"Las Vegas",	
 "Los Angeles",	'Miami',	"Minneapolis","Nashville","New York City","Oakland",'Philadelphia',	'Phoenix',	"Portland",	"Raleigh",	
 "San Antonio",	"San Diego",'San Francisco','San Jose',	"Seattle",	'Washington', 'D.C.'	
 ];

const [currentCity,updateCity]=useState("");
const [currentBasicSalary,updateBasicSalary]=useState("");
const [currentDistance,updateDistance]=useState("");
const [currentWorkHours,updateWorkHours]=useState("business");
const [currentCancle,updateCancle]=useState("no");
const [currentAccess,updateAccess]=useState("no");
const [currentTotal,updateTotal]=useState(0);

const handleCalculate=()=>{

  // initial the Amount
  let amount = parseFloat(currentBasicSalary);
  let dummyamount = parseFloat(currentBasicSalary);

  // city selection
  if(!cityList.includes(currentCity))
                {
                  alert("You Must Enter the Correct City.. (Ex: Austin,Miami)");
                }

  // working hours Amount
  if(currentWorkHours==="business"){
    amount=amount+0;
  }else if(currentWorkHours==="out-of-hours"){
    amount=amount+amount*1.5;
  }else{
    amount=amount+amount*2;
  }

  // distance amount
  if(currentDistance>50){
    amount=amount+ (currentDistance-50)*0.4;
  }

  // ticket Cancle
  if(currentCancle==="yes"){
    amount=amount+ dummyamount*0.5;
  }

  // access denied
  if(currentAccess==="yes"){
    amount=amount+ dummyamount;
  }

  // service management fees
  amount=amount+ dummyamount*0.05;

  updateTotal(amount.toFixed(3));
};

const handleClear=()=>{
  updateCity("");
  updateBasicSalary("");
  updateDistance("");
  updateWorkHours("business");
  updateCancle("no");
  updateAccess("no");
  updateTotal(0);
}

  return (
    <>
     <section>
      <div className=' bg-[#f0f8ff] w-full flex flex-col justify-center items-center' >
      <div className='flex flex-col justify-center  items-center '>
      <img className='h-5 mt-8' src='./logo.png'/>
      <h2 className='text-center py-4 bg-gradient-to-r from-[#008080] to-[#800080] bg-clip-text text-transparent  text-5xl font-bold'>Teceze Global Calculator</h2>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.9 }} 
                className='grid grid-cols-2 items-center gap-4 text-lg mx-4 px-6 py-6 mt-6 shadow-xs shadow-[#008080] rounded-2xl'>

      <label className='text-[#800080]'>City </label>
      <input className='w-38 h-12 px-6 border border-[#800080] rounded-2xl' type="text" value={currentCity} onChange={(e)=>updateCity(e.target.value)} placeholder='Enter Your City..'/>
      
      <label className='text-[#800080]'>Enter Your Basic Salary</label>
      <input className='w-38 h-12 px-6 border border-[#800080] rounded-2xl' type="text" value={currentBasicSalary} onChange={(e)=>updateBasicSalary(e.target.value)} placeholder='Enter Your Basic Salary..'/>
      
      <label className='text-[#800080]'>Working Hours </label>
      <select value={currentWorkHours} onChange={(e)=>updateWorkHours(e.target.value)} className='w-38 h-12 px-2 border border-[#800080] rounded-2xl text-sm'>
       <option value="business">Business Hours</option>
       <option value="out-of-hours">Out-of-Hours</option>
       <option value="weekends/holidays">Weekends/Holidays</option>
       </select>

       <label className='text-[#800080]'>Travel Distance </label>
       <input type='text' value={currentDistance} onChange={(e)=>updateDistance(e.target.value)} placeholder='Enter Your Travel Distance..' className='w-38 h-12 px-6 border border-[#800080] rounded-2xl text-sm'></input>

       <label className='text-[#800080]'>Cancellation within 24H</label>
       <select value={currentCancle} onChange={(e)=>updateCancle(e.target.value)} className='w-38 h-12 px-6 border border-[#800080] rounded-2xl text-sm'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>

       <label className='text-[#800080]'>Access Denied</label>
       <select value={currentAccess} onChange={(e)=>updateAccess(e.target.value)} className='w-38 h-12 px-6 border border-[#800080] rounded-2xl text-sm'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>

      </motion.div>
    <div className='italic text-gray text-gray-700 text-xs py-6'>Note : 5% Service Management fee Automatically added. </div>
      <div className='flex  justify-center items-center gap-4 px-6'>
       <button onClick={handleCalculate} className='bg-[#008080] hover:bg-white hover:text-[#008080] border hover:border-[#008080] py-2 rounded-2xl w-36 text-white font-semibold cursor-pointer'>Calculate</button>
       <button onClick={handleClear} className='bg-[#008080] hover:bg-white hover:text-[#008080] border hover:border-[#008080] py-2 rounded-2xl w-36 text-white font-semibold cursor-pointer'>Clear</button>
       </div>

       <div className='flex gap-4 mt-4 py-2 justify-center items-center bg-purple-200 w-full  text-xl text-purple-950 font-semibold'>
        <p>Final amount : {currentTotal}</p>
       </div>

      </div>
    </section>
    </>
  )
}

export default Cal

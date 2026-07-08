import React from 'react'
import { useLocation } from 'react-router-dom';
const Hero = () => {
  const host = ["Scalable VPS" , "Dedicated"];
  const location = useLocation();
  const isVPS = location.pathname.includes("/vpshosting");
  return (
   <div className='flex flex-col justify-center items-center text-center mt-20'>
       <h1 className='text-5xl font-bold'>{isVPS ? host[0] : host[1]}  Hosting Solutions </h1>
       <div className='flex flex-col justify-center items-center text-center mt-4 w-[600px]'> 
       <p className=' text-gray-500 m-4'> Experience unparalleled performance with our next-generation Virtual Private 
        Servers. Deploy in seconds with your choice of enterprise-grade operating 
        systems.</p> 
        </div>
        </div>
  )
};
export default Hero;

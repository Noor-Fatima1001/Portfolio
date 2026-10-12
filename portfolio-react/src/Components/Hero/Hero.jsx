import React from 'react'
import profile from "../../assets/business1.png"
import {motion} from "framer-motion"


const Hero = () => {
  return (
    <div>
    <motion.div 
    
    initial={{opacity:0,y:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
       className='bg-black text-white flex justify-around items-center p-20 space-x-10  lg:flex-row sm:flex-col sm:space-y-10' id='home'>
        <div className='lg:w-1/3 sm:w-fit'>
        <p className='text-4xl mb-5  text-slate-300'>I'm</p>
        <h1 className="text-7xl ">Noor Fatima</h1>
        <p className='mt-10  text-2xl text-slate-300'>I am a frontend developer from Rahim Yar Khan.I am a fresher and I am passionate and eager to learn frontend 
        developer with a strong foundation in HTML ,CSS ,Javascript and React JS.</p></div>
        <div className='w-1/3 items-center sm:w-fit '>
        <img src={profile} alt=''   className='  w-96 h-96  '/>
        </div>

        
        
        
        
        
    </motion.div>
    </div>
  )
}

export default Hero

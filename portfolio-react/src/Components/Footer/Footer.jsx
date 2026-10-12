import React from 'react'
import user_icon from "../../assets/user_icon.svg"


const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
              <div className='flex-1 mb-4 md:mb-0'>
              <h3 className='text-2xl font-bold mb-2'>Noor</h3>
          
            <p className='text-gray-400'>Frontend developer based in Pakistan, specializing in web development.</p>
        </div>
        <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400  ' />
          
            <button type='submit' className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-4 py-2 rounded-r-lg  ">Subscribe</button>
            </form>
        </div>
        </div>
      
    </div>
    <hr />
    <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center px-5">
      <p className="text-gray-400">
      © 2024 SpicySugar. All rights are reserved.
      </p>
      <div className=" flex space-x-4 my-4 md:my-0 text-gray-400 hover:text-white">
        <p >Terms of services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer

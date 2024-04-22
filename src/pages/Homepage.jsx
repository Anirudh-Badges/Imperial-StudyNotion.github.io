import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      
      <div className='relative w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 text-white'>
        <Link to={'/signup'}>
            <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800  text-richblack-200 p-1 font-bold  drop-shadow-[0_1.5px_rgba(255,255,0,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                    <p className='text-white'>Become an Instructor</p>
                    <FaArrowRight/>
                </div>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Homepage

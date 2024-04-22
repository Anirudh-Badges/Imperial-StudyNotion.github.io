import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      
      <div className='w-11/12 mx-auto mt-16 transtion-all duration-200'>
        <Link to={'/signup'}>
            <div className=''>
                <div className='bg-richblack-400 w-fit flex justify-center items-center gap-2 rounded-full p-[6px]'>
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

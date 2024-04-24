import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { Heading } from '../Components/cores/Homepage/Heading';
import { Button } from '../Components/cores/Homepage/Button';

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

        {/* heading-2 */}
        <div className='text-4xl text-center font-semibold'>
          Empower Your Future with
          <Heading text={'Coding Skills'}/>
        </div>

        {/* header3 */}
        <div className=' max-w-[800px] text-center'>
          <p className=' text-richblack-500'>With Our online coding courses with you can learn at your own pace, from anywhere in the world, get access to a wealth of resources, including hand-on projects, quizzes and presonalized feedback form instructors</p>
        </div>
        {/* button */}
        <div className='flex justify-between items-center mx-auto gap-9'>
          <Link to={'/signup'}>
            <div className= ' bg-yellow-50 rounded-lg text-richblack-900'>
            <Button text = {'Learn More'} />
            </div>
          </Link>
          <Link to={'/signup'}>
            <div className=' bg-richblack-800 rounded-lg border-r-2 border-b-2 border-b-richblack-200 border-r-richblack-200'>
              <Button text = {'Book a demo'} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage

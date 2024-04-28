import React from 'react'
import { Heading } from './Heading'
import Know_your_progress from '../../../assets/Images/Know_your_progress.png';
import Compare_with_others from '../../../assets/Images/Compare_with_others.png';
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png';
import { CTAButton } from './CTAButton';

const LearnLanguage = () => {
  return (
    <div className='mt-[150px]'>
        <div className=' flex flex-col items-center'>
            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <Heading text={"learning any language"}/>
            </div>
            <div className=' text-center text-richblack-600 mx-auto text-base mt-3 font-medium w-[45%]'>
                Using spin making learning multiple languages easy, with 20+ languages realistic, voice-over,
                progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row items-center justify-center mt-5 '>
                <img src={Know_your_progress} alt="img1"
                className=' -mr-28' />
                <img src={Compare_with_others} alt="img2"/>
                <img src={Plan_your_lessons} alt="img3" 
                className=' -ml-36'/>
            </div>

            <div className='mt-3 mb-20 '>
                <CTAButton active= {true} path={"/signup"} text={"Learn More"}/>
            </div>
        </div>
    </div>
  )
}

export default LearnLanguage
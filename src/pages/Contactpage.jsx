import React from 'react';
import GetInTouchForm from '../Components/cores/aboutus/GetInTouchForm';

const Contactpage = () => {
    return (
        <div>
            <div className='w-11/12 max-w-maxContent mx-auto flex item-center justify-center space-x-20 mt-10'>
                <div className=' bg-richblack-700 max-w-maxContent p-10 w-[400px] space-y-6 h-fit rounded-md'>
                    <div>
                        {/* icon */}
                        <div>

                        </div>
                        <div>
                        <h2 className='text-white font-semibold text-[20px]'>Chat on us</h2>
                        <p className='text-richblack-200 font-medium'>Our friendly team is here for help.</p>
                        <p className='text-richblack-200 font-medium'>@mail address</p>
                        </div>
                    </div>
                    <div>
                        {/* icon */}
                        <h2 className='text-white font-semibold text-[20px]'>Visit us</h2>
                        <p className='text-richblack-200 font-medium'>Come and say hello to our office HQ.</p>
                        <p className='text-richblack-200 font-medium'>Here is the location/ address</p>
                    </div>
                    <div>
                        {/* icon */}
                        <h2 className='text-white font-semibold text-[20px]'>Call us</h2>
                        <p className='text-richblack-200 font-medium'>Mon - Fri From 8am to 5pm</p>
                        <p className='text-richblack-200 font-medium'>+123 456 7890</p>
                    </div>
                </div>
                <div className='w-[45%] border-[1px] border-richblack-600 p-3 rounded-md'>
                    <GetInTouchForm title={"Got a Idea? We've got the skills. Let's team up"}
                        description={"Talk us more about yourself and what you're not in mind."} />
                </div>
            </div>
        </div>
    )
}

export default Contactpage
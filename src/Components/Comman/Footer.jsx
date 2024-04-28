import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import logowhite from "../../assets/Images/logowhite.png";

const Footer = () => {
  return (
    <div className=' w-[100%] h-[600px] bg-richblack-600'>
      <div className='w-11/12 mx-auto flex sm:flex-col flex-row p-10'>
        <div className='w-[50%] grid-col-3'>
          <img src={logowhite} alt="" className=''/>
          <div>
            {

            }
          </div>
        </div>
        {/* <div className='w-0 h-fit border-[8px] border-richblack-700'></div> */}
        <div
        className='w-[50%]'></div>
      </div>
    </div>
  )
}

export default Footer


{/* <div className='flex text-richblack-400 items-center  mt-5 gap-3'>
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div> */}
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-11/12 flex p-[90px] ' >
      
      <div className=' text-richblack-500 '>
        {/* left section */}
        <div className='ml-10'>
          <div>
            <img src={""} alt="" />
          </div>

          <div className='flex justify-between item-start gap-4 '>
            <div className='  '>
              <h1 className='p-1'>Company</h1>
              <div className=' text-richblack-300 text-[14px]'>
                <Link to={"/about"}>
                  <p className='p-1'>About</p>
                </Link>
                <Link to={"/career"}>
                  <p className='p-1'>Career</p>
                </Link>
                <Link to={"/affilated"}>
                  <p className='p-1'>Affilated</p>
                </Link>
              </div>
              <div className='flex text-richblack-400 items-center  mt-2 gap-3'>
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
            <div className='ml-10'>
              <h1>Resources</h1>
              <div className=' text-richblack-300 text-[14px]'>
                <Link to={"/articles"}>
                  <p className='p-1'>Articles</p>
                </Link>
                <Link to={"/blog"}>
                  <p className='p-1'>Blog</p>
                </Link>
                <Link to={"/chartsheet"}>
                  <p className='p-1'>Chart Sheet</p>
                </Link>
                <Link to={"/Codechallenges"}>
                  <p className='p-1'>Code Challenges</p>
                </Link>
                <Link to={"/docs"}>
                  <p className='p-1'>Docs</p>
                </Link>
                <Link to={"/projects"}>
                  <p className='p-1'>Projects</p>
                </Link>
                <Link to={"/videos"}>
                  <p className='p-1'>Videos</p>
                </Link>
                <Link to={"/workshops"}>
                  <p className='p-1'>WorkShops</p>
                </Link>

              </div>
              <div className=' mt-3 '>
                <h1 className='p-1'>Support</h1>
                <div className=' text-richblack-300 '>
                  <Link to={"/helpcenter"}>
                    <p className='p-1'>Help Center</p>
                  </Link>
                </div>
              </div>
            </div>
            <div  className='ml-10'>
            <div>
              <h1 className='p-1'>Plans</h1>
              <div className=' text-richblack-300 text-[14px]'>
                <Link to={"/paid_membership"}>
                  <p className='p-1'>Paid membership</p>
                </Link>
                <Link to={"/for_students"}>
                  <p className='p-1'>For students</p>
                </Link>
                <Link to={"/business_solution"}>
                  <p className='p-1'>
                    Business solutions
                  </p>
                </Link>
              </div>
            </div>
            <div className=' mt-4'>
              <h1 className='p-1'>Community</h1>
              <div className=' text-richblack-300 text-[14px]'>
                <Link to={"/forums"}>
                  <p className='p-1'>Forums</p>
                </Link>
                <Link to={"/chapter"}>
                  <p className='p-1'>
                    Chapters
                  </p>
                </Link>
                <Link to={"/events"}>
                  <p className='p-1'>
                    Events
                  </p>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* line section */}
        <div></div>
        {/* right section */}
        <div></div>
      </div>
      {/*horizontal line  */}
      <div></div>
      {/* last portion */}
      <div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>

      </div>
    </div>
  )
}

export default Footer

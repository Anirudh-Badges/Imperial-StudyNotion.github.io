import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { useSelector } from 'react-redux';



const VerifyEmail = () => {
    const { loading } = useSelector((state) => state.auth);
    return (
        <div className='text-white flex justify-center items-center mx-auto min-h-screen'>
            {
                loading ? (<div className='spinner'></div>) : (
                    <div className=' max-w-[500px] space-y-5'>
                        <h1 className=' text-3xl font-semibold text-white'>
                            Verify Email
                        </h1>
                        <p className=' text-richblack-500 text-[18px] w-[440px]'>
                            A verification code has been sent to you. Enter the code below
                        </p>
                        <form>

                            <button type="submit"
                                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" >
                                Verify Email
                            </button>
                        </form>
                        <div className="mt-6 flex items-center justify-between">
                            <Link to="/login">
                                <div className='text-richblack-5 flex items-center gap-x-2'>
                                    <FaLongArrowAltLeft className=' mt-1' />
                                    <p>Back to Login</p>
                                </div>
                            </Link>
                            <button className="flex items-center text-blue-100 gap-x-2">
                                <RxCountdownTimer />
                                Resend it
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default VerifyEmail
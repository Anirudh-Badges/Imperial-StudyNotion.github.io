import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

const ForgetPassword = () => {
    const [emailSent, setEmailSent] = useState('false');
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);


    return (
        <div className='text-white flex justify-center items-center mx-auto min-h-screen overflow-y-hidden'>
            {
                loading ? (
                    <div className="spinner"></div>
                ) : (<div className=' max-w-[500px] space-y-5'>
                    <h1 className=' text-3xl font-semibold'>
                        {
                            emailSent ? "Reset Your Email" : "Check Email"
                        }
                    </h1>
                    <p className=' text-richblack-500 text-[18px] '>
                        {
                            emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try email recovery"
                                : `We have sent the reset email to your ${email} `
                        }
                    </p>
                    <form  >
                        {
                            emailSent && (
                                <label>
                                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                        Email Address <sup className="text-pink-200">*</sup>
                                    </p>
                                    <input
                                        type="email"
                                        required
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className="w-full rounded-[0.5rem] bg-richblack-800 mb-5 p-[12px] pr-12 text-richblack-5" />
                                </label>
                            )
                        }
                        <button className={` w-[500px] text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold  
                      bg-yellow-50 text-black `} >
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>
                    <div >
                        <Link to="/login">
                            <div className=' text-richblack-5 flex items-center gap-x-2'>
                                <FaLongArrowAltLeft className=' mt-1' />
                                <p>Back to Login</p>
                            </div>
                        </Link>

                    </div>
                </div>)
            }
        </div>
    )
}

export default ForgetPassword
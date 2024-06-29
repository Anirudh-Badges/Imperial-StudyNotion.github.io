import { useState } from "react"
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useSelector } from "react-redux";



const UpdatePassword = () => {

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    const { password, confirmPassword } = formData
    
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }


    return (
        <div className='text-white flex justify-center items-center mx-auto min-h-screen'>
            {
               loading ? (<div className="spinner"></div>) : (
                <div className=' max-w-[500px] space-y-5'>
                <h1 className=' text-3xl font-semibold'>
                    Choose new Password
                </h1>
                <p className=' text-richblack-500 text-[18px] w-[400px]'>
                    Almost done. Enter your new password and you're all set.
                </p>
                <form>
                    <label className=" relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Create Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {!showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Enter confirm password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleOnChange}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                        />
                        <span
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-[70px] z-[10] cursor-pointer"
                        >
                            {!showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <button type="submit"
                        className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" >
                        Update Password
                    </button>
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link to="/signup">
                        <div className='text-richblack-5 flex items-center gap-x-2'>
                            <FaLongArrowAltLeft className=' mt-1' />
                            <p>Back to Sign Up</p>
                        </div>
                    </Link>
                </div>
            </div>
               )
            }
        </div>
    )
}

export default UpdatePassword
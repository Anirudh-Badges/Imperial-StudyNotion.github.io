import React, { useState } from "react";


import CountryCode from "../../../data/countrycode.json";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    
      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
      const { firstName, lastName, email, password, confirmPassword } = formData
    
      // Handle input fields, when some value changes
      const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
      
      const handleOnSubmit = (e) =>{
        e.preventDefault();
        
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })
      }
  return (

    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 w-full">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 ">
              FirstName <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter first name"
              name="firstName"
              value={firstName}
                onChange={handleOnChange}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              LastName <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter LastName"
              name="lastName"
              value={lastName}
                onChange={handleOnChange}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
            />
          </label>
        </div>


        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Email Address"
            value={email}
            onChange={handleOnChange}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          />
        </label>



        {/* <div>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Phone Number <sup className="text-pink-200">*</sup>
            </p>
            <div className="flex gap-x-4">
              <select
                name="Contry-Code"
                id=""
                className="w-[100px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
              >
                {CountryCode.map((ele, i) => {
                  return (
                    <option value="CountryCode" key={i}>
                      {ele.code}
                    </option>
                  );
                })}
              </select>
              <input
                type="tel"
                required
                placeholder="12345-67890"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleOnChange}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
              />
            </div>
          </label>
        </div> */}

        <div className="flex gap-x-4">
          <label>
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
          </label>

          <label>
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
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>

  );
};

export default SignupForm;

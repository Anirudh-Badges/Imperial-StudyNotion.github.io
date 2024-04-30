import React, { useState } from "react";
import countrycode from "../../../data/countrycode.json";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    emailAddress,
    phonenumber,
    password,
    confirmpassword,
  });

  const [showPassword, setShowPassword] = useState("false");
  const {
    firstName,
    lastName,
    emailAddress,
    phonenumber,
    password,
    confirmpassword,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.value]: e.target.value,
    }));
  };

  return (
    <form>
      <div className="flex gap-x-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            FirstName <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter firstName"
            value={firstName}
            name="firstName"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            LastName <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            name="lastName"
            value={lastName}
            placeholder="Enter lastName"
            type="text"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
      </div>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          name="email"
          placeholder="Enter Email Address"
          value={emailAddress}
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <div className="flex gap-x-4">
        <select className="w-[25px]">
          {countrycode.map((ele, i) => {
            return <option key={i}>{ele.code}</option>;
          })}
        </select>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Phone Number<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="phone"
            required
            placeholder="12345 67890"
            value={phonenumber}
            name="phonenumber"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
      </div>
      <div className="flex gap-x-4">
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="password"
            required
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={handleOnChange}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] x-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Confirm Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            name="confirmpassword"
            value={confirmpassword}
            placeholder="Enter password"
            type="password"
            onChange={handleOnChange}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] x-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-800"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;

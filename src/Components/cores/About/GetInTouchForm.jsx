import { useState }  from 'react';
import CountryCode from "../../../data/countrycode.json";

const GetInTouchForm = ({title, description}) => {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        msgs:"",
    });

    const { firstName, lastName, email, phoneNumber, msgs } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber:"",
            msgs:""
        })
    }
    return (
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center  gap-4' >
                <h1 className='text-3xl text-richblack-5 font-semibold'> {title}</h1>
                <p className='text-richblack-500 '>{description}</p>
            </div>

            <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-3 w-[450px] items-center mx-auto ">
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


                <div>
                    <label className=''>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Phone Number <sup className="text-pink-200">*</sup>
                        </p>
                        <div className="flex gap-x-4">
                            <select
                                name="Contry-Code"
                                id=""
                                className="w-[150px] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
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
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 "
                            />
                        </div>
                    </label>
                </div>

                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Message <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        type="text"
                        name="msgs"
                        required
                        placeholder="Enter messages"
                        value={msgs}
                        onChange={handleOnChange}
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 h-[100px]"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default GetInTouchForm
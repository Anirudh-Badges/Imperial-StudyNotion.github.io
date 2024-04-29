import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import { Heading } from "./Heading";
import { CTAButton } from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 items-center">
        <div className="lg:w-[50%] h-[450px]">
          <img
            src={InstructorImage}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0px_px] object-contain "
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-4">
          <h1 className="lg:w-[50%] text-4xl font-semibold">
            Become an
            <Heading text={"Instructor"} />
          </h1>

          <p className="text-richblack-400 w-[80%] text-justify font-medium mb-10 text-[16px] ">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton text={<div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight/>
            </div>}active={true} path={'/signup'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;

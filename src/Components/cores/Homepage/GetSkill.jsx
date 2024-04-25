import React from "react";
import { Heading } from "./Heading";
import { CTAButton } from "./CTAButton";

const GetSkill = () => {
  return (
    <div className="w-11/12 mx-auto flex sm:flex-col justify-between items-center max-w-maxContent gap-8">
      <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
        <div className="text-richblack-900 text-4xl font-semibold lg:w-[45%]">
          Get the Skills you need for a
          <Heading text={"job that is in demand."} />
        </div>
        <div className="flex flex-col items-start gap-10 lg:w-[45%]">
          <div className="text-[16px] font-normal">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills
          </div>
          <CTAButton text={'Learn more'} active={true} path={'/signup'}/>
        </div>
      </div>
    </div>
  );
};

export default GetSkill;

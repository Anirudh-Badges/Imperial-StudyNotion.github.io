import React from "react";
import TimeLine from "../../../data/TimeLineData";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-20 mb-20">
        <div className="w-[45%] flex flex-col lg:gap-1 gap-14">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6">
                  <div className="bg-white rounded-full w-[52px] h-[50px] flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-12 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%]  flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 bg-caribbeangreen-700">
            <div className="flex gap-0 items-center lg:border-r border-caribbeangreen-300 px-6 lg:px-10">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <p className="w-[75px] text-caribbeangreen-300 text-sm">
                Year experience
              </p>
            </div>
            <div className="flex gap-0 items-center  border-caribbeangreen-300 px-6 lg:px-10">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <p className="w-[75px] text-caribbeangreen-300 text-sm">
                types of Courses
              </p>
            </div>
          </div>
          <img
            src={TimeLineImage}
            alt=""
            className="shadow-white shadow-[20px_20px_0px_0px] lg:h-fit h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;

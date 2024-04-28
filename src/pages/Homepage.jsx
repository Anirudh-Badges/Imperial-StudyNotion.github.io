import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Heading } from "../Components/cores/Homepage/Heading";
import { CTAButton } from "../Components/cores/Homepage/CTAButton";
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/cores/Homepage/CodeBlocks";
import GetSkill from "../Components/cores/Homepage/GetSkill";
import Footer from "../Components/Comman/Footer";
import Timeline from "../Components/cores/Homepage/Timeline";
import LearnLanguage from "../Components/cores/Homepage/LearnLanguage";

const Homepage = () => {
  return (
    <div>
      {/* HomePage-Upper-section-1  */}
      <div className="relative w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 text-white">
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800  text-richblack-200 p-1 font-bold  drop-shadow-[0_1.5px_rgba(255,255,0,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p className="text-white">Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* heading-2 */}
        <div className="text-4xl text-center font-semibold">
          Empower Your Future with
          <Heading text={"Coding Skills"} />
        </div>

        {/* header3 */}
        <div className=" max-w-[800px] text-center">
          <p className=" text-richblack-500">
            With Our online coding courses with you can learn at your own pace,
            from anywhere in the world, get access to a wealth of resources,
            including hand-on projects, quizzes and presonalized feedback form
            instructors
          </p>
        </div>
        {/* button */}
        <div className="flex justify-between items-center mx-auto gap-10">
          <CTAButton text={"Learn more"} active={true} path={"/login"} />
          <CTAButton text={"Book a demo"} active={false} path={"/signup"} />
        </div>

        {/* vide section  */}
        <div className="mx-3 my-7 shadow-[10px_-5px_5px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            autoPlay
            muted
            loop
          >
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        {/* section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div
                className="text-4xl font-semiboh
              ld"
              >
                Unlock Your
                <Heading text={" coding potential "} /> with our online courses.
              </div>
            }
            subheading={
              "Our courese are designed and taugnt by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              path: "/signup",
              text: "Try it Yourself",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              path: "/signup",
              active: false,
            }}
            codeColor={`text-richblack-100`}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* section-3  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <Heading text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              text: "Continue Lesson",
              path: "/signup",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              path: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>    

        {/*Explore-Section  */}
      </div>

      {/* Homepage-middle-section2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 flex-col max-w-maxContent justify-between items-center gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-8 text-white lg:mt-8 ">
              <CTAButton
                text={
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                }
                active={true}
                path={"/signup"}
              ></CTAButton>
              <CTAButton text={"Learn more"} active={false} path={"/signup"} />
            </div>
          </div>
        </div>
        <GetSkill />
        <LearnLanguage/>
      </div> 
    </div>
  );
}
export default Homepage
import React from "react";
import Logo from "../../assets/Images/logowhite.png";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";

const company = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Affiliates",
    link: "/affiliates",
  },
];

const resources = [
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Chart Sheet",
    link: "/chart Sheet",
  },
  {
    title: "Code challenges",
    link: "/code challenges",
  },
  {
    title: "Docs",
    link: "/docs",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Videos",
    link: "/videos",
  },
  {
    title: "Workspaces",
    link: "/workspaces",
  },
];

const Plans = ["Paid memberships", "For students", "Business solutions"];

const Community = ["Forums", "Chapters", "Events"];

const Subjects = [
  {
    title: "Al",
    link: "/al",
  },
  {
    title: "Cloud Computing",
    link: "/cloud-computing",
  },
  {
    title: "Code Foundations",
    link: "/code-foundations",
  },
  {
    title: "Computer Science",
    link: "/computer-science",
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity",
  },
  {
    title: "Data Analytics",
    link: "/data-analytics",
  },
  {
    title: "Data Science",
    link: "/data-science",
  },
  {
    title: "Data Visualization",
    link: "/data-visualization",
  },
  {
    title: "Developer Tools",
    link: "/developer-tools",
  },
  {
    title: "DevOps",
    link: "/devops"
  },
  {
    title: "Game Development",
    link: "/game-development"
  },
  {
    title: "IT",
    link: "/it"
  },
  {
    title: "Machine Learning",
    link: "/machine-learning"
  },
  {

    title: "Math",
    link: "/math"
  },
  {
    title: "Mobile Development",
    link: "/mobile-development"
  },
  {
    title: "Web Design",
    link: "/web-design"
  },
  {
    title: "Web Development",
    link: "/web-development"
  }
];


const Languages = [
  { title: "Bash", link: "/bash" },
  { title: "C++", link: "/c++" },
  { title: "C#", link: "/csharp" },
  { title: "Go", link: "/go" },
  { title: "HTML & CSS", link: "/html-css" },
  { title: "Java", link: "/java" },
  { title: "JavaScript", link: "/javascript" },
  { title: "Kotlin", link: "/kotlin" },
  { title: "PHP", link: "/php" },
  { title: "Python", link: "/python" },
  { title: "R", link: "/r" },
  { title: "Ruby", link: "/ruby" },
  { title: "SQL", link: "/sql" },
  { title: "Swift", link: "/swift" }
];
const Career_Building = [
  { title: "Career paths", link: "/career-paths" },
  { title: "Career services", link: "/career-services" },
  { title: "Interview prep", link: "/interview-prep" },
  { title: "Professional certification", link: "/professional-certification" },
  { title: "-", link: "/hi" },
  { title: "Full Catalog", link: "/full-catalog" },
  { title: "Beta Content", link: "/beta-content" }
];

const bottom = [
  { title: "Privacy Policy", link: "/privacy_policy" },
  { title: "Cookie Policy", link: "/cookie_policy" },
  { title: "Terms", link: "/terms" }
];
const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 justify-between items-center w-11/12 mx-auto max-w-maxContent relative py-14 text-richblack-400 ">
        <div className=" w-[100%] flex flex-col lg:flex-row pb-5">
          {/* section-1  */}
          <div className="lg:w-[55%] flex flex-row justify-between items-center gap-3 pl-3 lg:pr-10  sm:mt-20 -ml-20 ">
            <div className="w-[30%] lg:w-[30%] flex flex-col gap-3 mb-7 lg:pl-0 -mt-60 sm:-mr-24 sm:ml-12 ">
              <img src={Logo} alt="" className="w-60 h-10" />

              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div>
                {company.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.link}>{ele.title}</Link>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div></div>
            </div>

            <div className="w-[30%] lg:w-[30%] flex flex-col gap-3 mb-7 -mt-32 sm:ml-12 sm:-mr-24 ">
              <h1 className="text-[16px] text-richblack-100 font-semibold">
                Resources
              </h1>
              <div>
                {resources.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.link}>{ele.title}</Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>

              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0 -mt-56 sm:-mr-20 mr-8">
              <h1 className="text-[16px] text-richblack-100 font-semibold">
                Plans
              </h1>
              <div className=" mb-11">
                {Plans.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 "
                      key={i}
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-[16px] font-semibold text-richblack-100 ">
                Community
              </h1>
              <div>
                {Community.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className=" lg:border-[1px] lg:border-richblack-700 h-[450px] w-0"></div>
          </div>
          {/* section-2  */}
          <div className="lg:w-[50%] flex flex-row justify-between items-center gap-3 pl-16  ">
            <div className="w-[40%] flex flex-col gap-3 mb-7 lg:pl-0 mt-4">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Subjects
              </h1>
              <div>
                {Subjects.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.link}>{ele.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-[30%] lg:w-[30%] flex flex-col gap-3 mb-7 -mt-12 ">
              <h1 className="text-[16px] text-richblack-100 font-semibold">
                Languages
              </h1>
              <div>
                {Languages.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.link}>{ele.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[48%] lg:w-[30%] -mt-56 ">
              <h1 className="text-[16px] text-richblack-100 font-semibold mb-3">
                Career Building
              </h1>
              <div>
                {Career_Building.map((ele, i) => {
                  return (
                    <div
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      key={i}
                    >
                      <Link to={ele.link}>
                        {ele.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          
        </div>
      </div>
      <div className="w-10/12 mx-auto flex flex-col  items-start ">
            <div className=" lg:border-[1px] lg:border-b lg:border-richblack-700 w-full h-0 -mt-11"></div>

             <div className="flex flex-row items-center justify-between gap-[400px] text-richblack-400  sm:ml-[410px] ">
        <div className="flex flex-row w-[50%] gap-5  ">
          {bottom.map((ele, i) => {
            return (
              <div
                className="text-[16px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                key={i}
              >
                <Link to={ele.link}>
                  {ele.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" text-[16px] flex ">
          Made by Amisha@ 2024
        </div>
      </div>
      </div>

     
    </div>
  );
};
export default Footer;

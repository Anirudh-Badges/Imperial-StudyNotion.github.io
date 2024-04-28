import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
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

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 justify-between items-center w-11/12 mx-auto max-w-maxContent relative py-14 text-richblack-400 ">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* section-1  */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between items-center gap-3 pl-3 lg:pr-5 lg:border-r lg:border-richblack-400">
            <div className="w-[30%] lg:w-[30%] flex flex-col gap-3 mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />

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
          </div>
          <div className="w-[30%] lg:w-[30%] flex flex-col gap-3 mb-7 ">
            <div>
              {

              }
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

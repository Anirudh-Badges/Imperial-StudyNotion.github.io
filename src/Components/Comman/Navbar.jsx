// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logowhite.png"
import { NavbarLinks } from "../../data/navbar-links";
const Navbar = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b-[1px] border-b-richblack-800 transition-all duration-200 text-white">
      <div className="w-11/12 flex mx-auto items-center justify-between max-w-maxContent">
        {/* Logo  */}
        <Link to="/">
          <img src={logo} alt="" width={168} height={32} loading="lazy" />
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-x-6">
            {
              NavbarLinks.map((link, i) => (
                <li key={i}>
                  {
                    link.title === 'Catalog' ? (<div>

                    </div>) :
                      (
                        <div >
                          <Link to={link.path}>
                            {link.title}
                          </Link>
                        </div>
                      )
                  }
                </li>
              ))
            }
          </ul>
        </div>

        <div className="flex gap-x-2">
          <Link to={"/login"}>
            <div
              className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold 
       scale-95 transition-all duration-200`}>
              Login
            </div>
          </Link>
          <Link to={"/signup"}>
            <div
              className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold 
       scale-95 transition-all duration-200`}>
              Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

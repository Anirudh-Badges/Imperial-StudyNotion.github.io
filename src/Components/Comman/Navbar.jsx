// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logowhite.png"
import { NavbarLinks } from "../../data/navbar-links";

const Navbar = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b-[1px] border-b-richblack-800 transition-all duration-200">
      <div className="w-11/12 mx-auto flex items-center justify-between max-w-maxContent">
        {/* Logo  */}
        <Link to="/">
          <img src={logo} alt="" width={168} height={32} loading="lazy"/>
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-5">
            {
              NavbarLinks.map((link,i) => {
                return <li key={i}>
                  {
                    link.title === 'catalog' ? (
                      <div></div>
                    ) :(
                      <div>
                        <Link to={link.path}>
                        {
                          link.title
                        }
                        </Link>
                      </div>
                    )
                  }
                </li>
              })
            }
          </ul>
        </div>

        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

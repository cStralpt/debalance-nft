import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
const SideNavigation = ({ navMenu }) => {
  const [isHamburgerNav, setHamburgerNav] = useState(false);
  return (
    <aside className="border-4_ flex justify-center items-center lg:p-4 relative">
      <div className="nav-container lg:flex flex-col gap-2 hidden">
        {navMenu.map((d, i) => (
          <a href={`#${d}`} key={i} className="relative group">
            <nav className="p-2 pb-0 pr-0 text-[#497174] border-b-2 border-[#D6E4E5] text-right font-[PBCaps] hover:text-[#EB6440] transition-all">
              {d}
            </nav>

            <span className="absolute flex group-hover:bg-[#EB6440] w-0 bottom-0 right-0 p-[1px] group-hover:w-full transition-all ease-out duration-75"></span>
          </a>
        ))}
      </div>
      <div
        className={`lg:hidden flex absolute top-0 right-0 p-4 flex-col ${
          isHamburgerNav && "bg-[#EFF5F5] h-full "
        } transition-all duration-200 ease-linear`}
      >
        <span
          className="burger-btn text-[#497174] text-2xl cursor-pointer hover:text-[#EB6440] transition duration-75 ml-auto ease-in peer ..."
          onClick={() => {
            setHamburgerNav(!isHamburgerNav);
          }}
        >
          <FaHamburger />
        </span>
        <div className={`overflow-hidden ${isHamburgerNav ? "w-fit" : "w-0"}`}>
          {navMenu.map((d, i) => (
            <a href={`#${d}`} key={i} className="relative group shit">
              <nav className="p-2 pb-0 pr-0 text-[#497174] border-b-2 border-[#D6E4E5] text-right font-[PBCaps] hover:text-[#EB6440] transition-all">
                {d}
              </nav>

              <span className="absolute flex group-[.shit]-hover:bg-[#EB6440] w-0 bottom-0 right-0 p-[1px] group-[.shit]-hover:w-full transition-all ease-out duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;

import { useState } from "react";
import Link from "./Link";
const Header = () => {
  const [view, setView] = useState(false);

  return (
    <header className="w-full h-[90px] flex items-center bg-yellow-300/50 backdrop-blur-[6px] fixed top-0 z-[999]">
      <div className="flex items-center justify-between container mx-auto">
        {/* links */}
        <button
          className="flex flex-col gap-y-1 z-50 transition-all duration-700 ease-in-out"
          onClick={() => {
            setView((e) => !e)
          }}
        >
          <span className={`w-10 h-1 bg-white transition-all duration-300 ease-in-out  ${view ?"rotate-45":""}`}></span>
          <span className={`w-10 h-1 bg-white transition-all duration-300 ease-in-out  ${view?"hidden":""}`}></span>
          <span className={`w-10 h-1 bg-white transition-all duration-300 ease-in-out  ${view?"-rotate-45 -translate-y-2":""}`}></span> 
        </button> 
        <div
           className={`absolute top-0 left-0 h-screen p-4 w-[50%] bg-gray-400 transition-all ease-in duration-300 ${
            view ? "" : "-translate-x-full"
          }`}
        >
          <nav className="flex items-center justify-center w-full h-full ">
            <Link />
          </nav>
        </div>
        {/* logo */}
        <div>
          <img src="/Logo.svg" alt="Logo" />
        </div>
        {/* buttons */}
        <div className="hidden lg:flex">
          <button className="btn">Go</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

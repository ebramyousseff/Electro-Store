import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { useEffect, useState } from "react";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });

  useEffect(() => {
    
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="">
      <div className="fixed top-78 left-3">
        <div className="bg-[#7d7676a8] h-38 w-9 rounded-xl hidden md:flex md:flex-col justify-between py-1 items-center relative ">
          <div
            className={`bg-black px-[15px] py-[32px] rounded-2xl cursor-pointer absolute transition-all duration-300 ease-in-out ${
              darkMode ? "top-[80px]" : "top-[10px]"
            }`}
          ></div>
          <div
            className="z-10 cursor-pointer mt-7"
            onClick={() => setDarkMode(false)}
          >
            <CiSun className="text-white text-xl" />
          </div>
          <div
            className="z-10 cursor-pointer mb-6"
            onClick={() => setDarkMode(true)}
          >
            <FaMoon className="text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <div className="bg-[#7d7676a8] h-9 w-32 rounded-xl flex md:hidden md:flex-col justify-between py-1 items-center relative ">
          <div
            className={`bg-black px-[32px] py-[16px] rounded-2xl cursor-pointer absolute transition-all duration-300 ease-in-out ${
              darkMode ? "left-[60px]" : "left-[10px]"
            }`}
          ></div>
          <div className="flex justify-between items-center px-5 w-full">
            <div
              className="z-10 cursor-pointer "
              onClick={() => setDarkMode(false)}
            >
              <CiSun className="text-white text-xl" />
            </div>
            <div
              className="z-10 cursor-pointer"
              onClick={() => setDarkMode(true)}
            >
              <FaMoon className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;

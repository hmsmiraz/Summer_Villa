import { useEffect, useState } from "react";
import "./style.css";
import { CgMenuLeft } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIsExpanded((prevExpanded) => !prevExpanded),
      2000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-6xl m-6">
      {/* slider div */}
      <div className="w-[60%]">
        {/* icon and title div start */}
        <div className="flex p-3 gap-3 items-center ">
          <p>
            <CgMenuLeft className="text-3xl"></CgMenuLeft>
          </p>
          <p className="text-sky-600 font-bold  italic">
            VILLA OF <span className="text-black">Summer</span>
          </p>
        </div>
        {/* ____________end__________ */}

        {/* btn div start */}
        <div className="pt-20 pl-5 ">
          {/* Button with transition */}
          <button
            className={`text-black px-4 py-2 rounded-full transition-all duration-500 ${
              isExpanded ? "w-56 bg-slate-100" : "w-32 bg-slate-100"
            }`}
          >
            {isExpanded ? (
              <>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 font-xl font-bold">
                    <img className="w-8 " src="/public/3.svg" alt="" />
                    Villalar
                  </span>
                  <img
                    src="/public/1.svg"
                    alt="Image 2"
                    className="w-8  ml-6"
                  />
                  <img src="/public/2.svg" alt="Image 3" className="w-8 ml-2" />
                </div>
              </>
            ) : (
              <span className="flex items-center gap-2 font-xl font-bold">
                <img className="w-8 " src="/public/3.svg" alt="" />
                Villalar
              </span>
            )}
          </button>
        </div>
        {/* ----------end btn div__________ */}

        {/* search bar div start */}
        <div className="flex items-center bg-slate-100 rounded-full w-[600px] h-14 my-4">
          <div
            className="flex w-1/3 items-center  gap-2 hover:bg-cyan-700 transition duration-300 rounded-l-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center justify-center bg-cyan-700 rounded-full h-14 w-14  ">
              {isHovered ? <FaSearch className="text-white" /> : <FaLocationDot className="text-white" />}
            </div>
            <p className="font-thin italic ">Your Location?</p>
          </div>
          <div className="w-1/3 flex gap-5 ml-2">
            <div>
              <p className="font-thin italic text-xs">Check In</p>
              <div className="flex flex-row mt-1 gap-1">
                <SlCalender className="text-cyan-700"></SlCalender>
                <p className="font-thin italic text-xs">.../.../...</p>
              </div>
            </div>
            <div>
              <p className="font-thin italic text-xs">Check Out</p>
              <div className="flex flex-row mt-1 gap-1">
                <SlCalender className="text-cyan-700"></SlCalender>
                <p className="font-thin italic text-xs">.../.../...</p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex items-center text-mono font-thin italic gap-4">
              <FaUserCircle className="text-cyan-700"></FaUserCircle>
              <p className="text-cyan-700">HMS MIRAZ</p>
            </div>
          </div>
        </div>

        {/* __________end search bar div_________ */}
      </div>
      {/* img div */}
      {/* <div>
        <div className="w-[40%] flex justify-center items-center h-screen">
          <img
            src="/public/earth.png"
            alt="Rotating Image"
            className="w-72 h-72 earth_img"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;

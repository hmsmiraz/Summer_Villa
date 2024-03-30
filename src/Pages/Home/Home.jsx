import { useEffect, useState } from "react";
import "./style.css";
import { CgMenuLeft } from "react-icons/cg";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        {/* icon and title div */}
        <div className="flex p-3 gap-3 items-center ">
          <p>
            <CgMenuLeft className="text-3xl"></CgMenuLeft>
          </p>
          <p className="text-sky-600 font-bold  italic">
            VILLA OF <span className="text-black">Summer</span>
          </p>
        </div>
        {/* ______________________ */}
        {/* btn div */}
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

import React from "react";
import './style.css'
const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="/public/earth.png"
        alt="Rotating Image"
        className="w-32 h-32"
        // style={{
        //   animation: "spin 2s linear infinite", 
        // }}
      />
    </div>
  );
};

export default Home;

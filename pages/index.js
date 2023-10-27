import React from "react";
import Navbar from "Components/navbar_components/Navbar";
import Sidebar from "Components/layouts/Sidebar";
import Drawing from "Components/DrawingComponent";

const Home = () => {
 
  return (
    <div className="grid grid-cols-1 grid-cols-16-auto">
      <div>
        <Sidebar />
      </div>
      <div className="secondside">
        <Navbar />
        <div className="">
          <Drawing />
        </div>
      </div>
    </div>
  );
};

export default Home;

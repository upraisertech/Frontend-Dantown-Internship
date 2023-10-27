import React from "react";
import Navbar from "Components/navbar_components/Navbar";
import Sidebar from "Components/layouts/Sidebar";
import { useDispatch } from "react-redux";
import { closeDropdown, closeNotifications } from "../../features/uiSlice";
import SettingsHeader from "components/settings/SettingsHeader";

const Home = () => {
 
  return (
    <div className="grid grid-cols-1 grid-cols-16-auto">
      <div>
        <Sidebar />
      </div>
      <div className="secondside">
        <Navbar />
        <div className="">
          <SettingsHeader defaultTab={1} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import TopBar from "./TopBar";

import Footer from "../Footer";

import { Outlet } from "react-router-dom";
function ContentWrapper() {
  const metrics = [
    {
      show: true,
      title: "Movies in Data Base",
      color: "primary",
      digit: 21,
      icon: "film",
    },
    {
      show: true,
      title: "Total awards",
      color: "success",
      digit: 79,
      icon: "award",
    },
    {
      show: true,
      title: "Actors quantity",
      color: "warning",
      digit: 49,
      icon: "user",
    },
  ];

  

 

  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column"style={{ backgroundColor: "antiquewhite"}}>
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

          <Outlet />

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;

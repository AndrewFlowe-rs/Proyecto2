import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "../Footer";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
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

  const movies = [
    {
      title: "Billy Elliot",
      duration: 123,
      rating: 5,
      genre: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      title: "Alicia en el país de las maravillas",
      duration: 142,
      rating: 4.8,
      genre: ["Drama", "Acción", "Comedia"],
      awards: 3,
    },
  ];

  const dataTableHead = ["Titulo", "Duración", "Rating", "Género", "Premios"];

  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

   

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;

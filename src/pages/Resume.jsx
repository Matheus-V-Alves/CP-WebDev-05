import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

function Resume() {
  return (
    <div className="resume-body flex font-bold pt-8 pl-12 pb-8">
      <Link to="/">
        <div className="g-btn" title="Home">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </div>
      </Link>

      <div className="resume-content h-full w-full flex justify-center items-center gap-20">
        <img src="../assets/Images/work.png" alt="Currículo" />
        <a
          href="../assets/Images/Profile.pdf"
          download
          className="g-btn-2"
          title="Download Currículo"
        >
          {" "}
          <FontAwesomeIcon icon={faDownload} className=" mr-2" />. PDF
        </a>
      </div>
      <SideBar />
    </div>
  );
}

export default Resume;

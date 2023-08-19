import React, { useState } from "react";
import MapModal from "./MapModal";
import Login from "./Login";

const Header = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapContent, setMapContent] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const openMap = (content) => {
    setMapOpen(true);
    setMapContent(content);
  };

  const openLogin = (content) => {
    setLoginOpen(true);
  };

  const closeMap = () => {
    setMapOpen(false);
    setMapContent("");
  };

  return (
    <nav className="navbar navbar-expand-lg primary-bg">
      <div className="container">
        <img src="logo192.png" alt="logo" width="50" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ms-md-4 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="d-flex sign-btns">
            <button
              type="button"
              className="px-3 py-2 btn btn-outline-light"
              onClick={() => openLogin("map Content")}
            >
              Sign In / Sign Up
            </button>
            <button
              className="btn primary-bg text-white py-2 ms-1 ms-md-3"
              onClick={() => openMap("map Content")}
            >
              <i class="bx bx-current-location"></i>
            </button>
          </div>
          <MapModal mapOpens={mapOpen} closeMap={closeMap}>
            {mapContent}
          </MapModal>
          <Login isLogin={loginOpen} setLoginOpen={setLoginOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Header;

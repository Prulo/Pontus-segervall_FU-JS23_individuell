import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../abstracts/Nav.scss";

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setOpen(!open);
  };


  const handleCloseMenu = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="hamburger" onClick={handleButtonClick}>
        {open ? (
          <div className="close-icon"></div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      {open && (
        <div className="linkwrapper">
          <Link
            to="/menu"
            className="link"
            onClick={location.pathname === "/menu" ? handleCloseMenu : undefined}
          >
            <h1>Menu</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/About"
            className="link"
            onClick={location.pathname === "/About" ? handleCloseMenu : undefined}
          >
            <h1>Vårt kaffe</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/menu"
            className="link"
            onClick={location.pathname === "/menu" ? handleCloseMenu : undefined}
          >
            <h1>Min profil</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/menu"
            className="link"
            onClick={location.pathname === "/menu" ? handleCloseMenu : undefined}
          >
            <h1>Orderstatus</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
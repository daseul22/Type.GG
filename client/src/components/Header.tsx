import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="header-logo" to="/">
        TP.GG
      </Link>
      <Link className="header-login" to="/login">
        로그인
      </Link>
    </div>
  );
}

export default Header;

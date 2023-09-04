import React from "react";
import Navbar from "../Navbar";
import ThemeIcon from "../ThemeIcon";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = () => {
  return (
    <header className="header">
      
      <div className="logo-container">
        
        <img src="/images/trendmagaza.png" alt="Trend Mağaza Logo" className="logo" />
      </div>

      <Navbar />
      {/* <HeaderCartButton />  */}
      {/* sepetim burada normalde */}
      <ThemeIcon />
    </header>
  );
};

export default Header;

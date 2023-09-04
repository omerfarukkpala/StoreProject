import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  const { user, handleLogout } = useContext(SiteContext);

  const brandStyle = {
    color: "#050502", //  
    fontWeight: "bold",
  };

  const menuItemStyle = {
    color: "#050502", // Beyaz
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "background-color 0.3s",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFFFF" }}>
      <div className="container">
        
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              className="nav-link"
              to="/"
              style={menuItemStyle}
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              className="nav-link"
              to="/products"
              style={menuItemStyle}
            >
              Urunler
            </NavLink>
            <NavLink
              className="nav-link"
              to="/about"
              style={menuItemStyle}
              activeStyle={{ backgroundColor: "#1D7EBB", color: "#FFFFFF" }}
            >
              Hakkimizda
            </NavLink>
            <NavLink
              className="nav-link"
              to="/contact"
              style={menuItemStyle}
              activeStyle={{ backgroundColor: "#1D7EBB", color: "#FFFFFF" }}
            >
              Iletisim
            </NavLink>
            
            {user ? (
              <>
                <NavLink
                  className="nav-link"
                  to="/sepet"
                  style={menuItemStyle}
                >
                  Sepet
                </NavLink>
                <button className="btn" onClick={handleLogout} style={menuItemStyle}>
                  Logout ({user.name})
                </button>
              </>
            ) : (
              <NavLink
                className="nav-link"
                to="/login"
                style={menuItemStyle}
              >
                Login
              </NavLink>
            )}
          </div>
{/* 
          <div className="navbar-nav ms-auto">
            <ThemeIcon />
          </div> */}
        </div>
      </div>
      
    </nav>
  );
}

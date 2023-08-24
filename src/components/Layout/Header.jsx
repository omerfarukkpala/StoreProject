import Navbar from "../Navbar";
import ThemeIcon from "../ThemeIcon";
import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className="header">
      <h1>Trend Mağaza</h1>

     <Navbar/>
     <HeaderCartButton />  
     <ThemeIcon/>   
    </header>
  );
};

export default Header;

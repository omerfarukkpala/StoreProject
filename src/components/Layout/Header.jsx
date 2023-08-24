import Navbar from "../Navbar";
import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className="header">
      <h1>Trend Mağaza</h1>

     <Navbar/>
     <HeaderCartButton />     
    </header>
  );
};

export default Header;

import "./Header.css";
import logo from "../../assets/img/cura.png";

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;

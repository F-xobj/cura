import "./Header.css";
import logo from "../../assets/img/cura.png";

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;

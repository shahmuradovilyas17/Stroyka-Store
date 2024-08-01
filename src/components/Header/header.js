import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Logo.jpg";
import "./header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-inner">
      <div
        className="header-logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logoImg} alt="Logo" />
      </div>
      <input type="text" placeholder="Поиск" className="header-search" />
      <div
        className="header-cart-link"
        onClick={() => {
          navigate("/cart");
        }}
      >
        Корзина
      </div>
    </div>
  );
};

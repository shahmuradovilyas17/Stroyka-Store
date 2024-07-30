import logoImg from "../../assets/images/Logo.jpg";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header-inner">
      <div className="header-logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <input type="text" placeholder="Поиск" className="header-search" />
      <div className="header-cart-link">Корзина</div>
    </div>
  );
};

import logoImg from "../../assets/images/Logo.png";
import Banks from "../../assets/images/Banks.png";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-inner">
        <ul className="footer-items">
          <li className="footer-item">
            <div className="footer-item-logo">
              <img src={logoImg} alt="Logo" />
            </div>
            <div className="footer-item-mail">info@stroykastore.ru</div>
            <div className="footer-item-address">Москва, ул. Камушкина 10</div>
          </li>
          <li className="footer-item">
            <div className="footer-item-link">Личный кабинет</div>
            <div className="footer-item-link">Заказы</div>
            <div className="footer-item-link">Избранное</div>
            <div className="footer-item-link">Корзина</div>
          </li>
          <li className="footer-item">
            <div className="footer-item-link">Каталог</div>
            <div className="footer-item-link">Акции</div>
            <div className="footer-item-link">Бренды</div>
            <div className="footer-item-link">Контакты</div>
          </li>
          <li className="footer-item">
            <div className="footer-item-link">Стать продавцом</div>
            <div className="footer-item-link">Доставка</div>
            <div className="footer-item-link">Возврат</div>
            <div className="footer-item-link">Документация</div>
          </li>
        </ul>
        <ul className="footer-credits">
          <li className="footer-credits-company f-c-li">© СтройкаСтор</li>
          <li className="footer-credits-banks">
            <img src={Banks} alt="banks" />
          </li>
          <li className="footer-credits-author f-c-li">
            Cделано в KRUGLOV STUDIO
          </li>
        </ul>
      </div>
    </div>
  );
};

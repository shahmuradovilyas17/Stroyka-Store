import CartFrame from "../../assets/images/CartFrame.jpg";
import "./CartPage.scss";

export const CartPage = () => {
  return (
    <>
      <div className="cart-frame">
        <img src={CartFrame} alt="frame" />
        <div className="cart-frame-title">Корзина</div>
      </div>
    </>
  );
};

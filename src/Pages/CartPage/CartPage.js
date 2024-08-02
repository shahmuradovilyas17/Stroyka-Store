import CartFrame from "../../assets/images/CartFrame.jpg";
import { CartProductsItem } from "../../components/CartProductsItem/CartProductsItem";
import "./CartPage.scss";

export const CartPage = () => {
  return (
    <>
      <div className="cart-frame">
        <img src={CartFrame} alt="frame" />
        <div className="cart-frame-title">Корзина</div>
        <CartProductsItem />
      </div>
    </>
  );
};

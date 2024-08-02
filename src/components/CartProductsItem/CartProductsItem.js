import { useContext } from "react";
import { Context } from "../../App";
import "./CartProductsItem.scss";

export const CartProductsItem = () => {
  const { cartProducts, setCartProducts, prodCount, setProdCount } =
    useContext(Context);

  const inc = () => {
    setProdCount((prevState) => {
      return prevState + 1;
    });
  };
  const dec = () => {
    setProdCount((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="cart-products">
      {cartProducts.map((prod) => {
        return (
          <div className="cart-products-item" id={prod.id} key={prod.id}>
            <div className="cart-products-item-image">
              <img src={prod.img} alt="#" />
            </div>
            <div className="cart-products-item-content">
              <div className="cart-products-item-content-name">
                {prod.descr}
              </div>
              <div className="cart-products-item-content-price">
                {prod.price}₽
              </div>
              <div className="cart-products-item-content-count-bar">
                <button
                  className="cart-products-item-content-count-button"
                  onClick={inc}
                >
                  +
                </button>
                <div className="cart-products-item-content-count">
                  {prod.count}
                </div>
                <button
                  className="cart-products-item-content-count-button"
                  onClick={dec}
                >
                  -
                </button>
                <button className="cart-products-item-content-count-delete">
                  Удалить
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import { useContext } from "react";
import "./CartCountBar.scss";
import { Context } from "../../App";

export const CartCountBar = ({ padding, addProduct }) => {
  const { setProdCount, prodCount } = useContext(Context);
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
    <div className="selected-product-cart-bar">
      <button
        className="selected-product-cart"
        style={padding}
        onClick={addProduct}
      >
        В корзину
      </button>
      <div className="selected-product-count-bar">
        <button className="selected-product-count-button" onClick={inc}>
          +
        </button>
        <div className="selected-product-count">{prodCount}</div>
        <button
          className="selected-product-count-button"
          disabled={prodCount ? false : true}
          onClick={dec}
        >
          -
        </button>
      </div>
    </div>
  );
};

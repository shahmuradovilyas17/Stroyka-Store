import { useContext, useState } from "react";
import "./CartCountBar.scss";
import { Context } from "../../App";

export const CartCountBar = ({ padding, id }) => {
  const [prodCount, setProdCount] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const { products } = useContext(Context);

  const addProduct = () => {
    products.forEach((product) => {
      if (product.id === id) {
        setCartProducts((prevState) => {
          return prevState.concat([{ product, prodCount }]);
        });
      }
    });
  };

  console.log(cartProducts);

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

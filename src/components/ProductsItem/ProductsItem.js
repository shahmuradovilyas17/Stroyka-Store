import { useNavigate } from "react-router-dom";
import "./ProductsItem.scss";
import { useState } from "react";
import { CartCountBar } from "../CartCountBar/CartCountBar";

export const ProductsItem = ({ children }) => {
  const navigate = useNavigate();

  const [countVisible, setCountVisible] = useState(false);

  return children.map((product) => {
    return (
      <div className="products-item" key={product.id}>
        <div
          className="products-item-img"
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        >
          <img src={product.img} alt={product.descr} />
        </div>
        <div className="products-item-content">
          <div className="products-item-content-name">{product.descr}</div>
          <div className="products-item-content-price">
            {product.price + " ₽"}
          </div>
          {countVisible ? (
            <>
              <CartCountBar padding={{ padding: "6px 6px" }} id={product.id} />
              <button
                className="products-item-content-cancel"
                onClick={() => {
                  setCountVisible(!countVisible);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="products-item-content-cart"
              onClick={() => {
                setCountVisible(!countVisible);
              }}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    );
  });
};

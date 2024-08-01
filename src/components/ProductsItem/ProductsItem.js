import { useContext } from "react";
import "./ProductsItem.scss";
import { Context } from "../../App";

export const ProductsItem = () => {
  const { products } = useContext(Context);

  return products.map((product) => {
    return (
      <div className="products-item" id={product.id}>
        <div className="products-item-img">
          <img src={product.img} alt={product.descr} />
        </div>
        <div className="products-item-content">
          <div className="products-item-content-name">{product.descr}</div>
          <div className="products-item-content-price">
            {product.price + " ₽"}
          </div>
          <button className="products-item-content-cart">В корзину</button>
        </div>
      </div>
    );
  });
};

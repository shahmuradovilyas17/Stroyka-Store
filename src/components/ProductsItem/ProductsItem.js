import "./ProductsItem.scss";

export const ProductsItem = ({ children }) => {
  return children.map((product) => {
    return (
      <div className="products-item" key={product.id}>
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

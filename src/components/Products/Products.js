import { ProductsItem } from "../ProductsItem/ProductsItem";
import "./Products.scss";

export const Products = () => {
  return (
    <div className="products">
      <div className="products-title">Все товары</div>
      <div className="products-items">
        <ProductsItem />
      </div>
    </div>
  );
};

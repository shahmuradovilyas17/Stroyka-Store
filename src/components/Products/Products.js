import { useContext } from "react";
import { Context } from "../../App";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import "./Products.scss";

export const Products = () => {
  const { products } = useContext(Context);

  return (
    <div className="products">
      <div className="products-title">Все товары</div>
      <div className="products-items">
        <ProductsItem>{products}</ProductsItem>
      </div>
    </div>
  );
};

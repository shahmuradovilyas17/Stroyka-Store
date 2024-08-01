import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import { SelectedProduct } from "../../components/SelectedProduct/SelectedProduct";

export const SelectedProductPage = () => {
  const productId = useParams();

  const { products } = useContext(Context);

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    products.findIndex((product) => {
      if (product.id == productId.productId) return setSelectedProduct(product);
    });
  });
  return <SelectedProduct product={selectedProduct} />;
};

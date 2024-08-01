import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import { ProductsItem } from "../../components/ProductsItem/ProductsItem";
import "./SelectedCategoryPage.scss";

export const SelectedCategoryPage = () => {
  const catId = useParams();
  const { categories, products } = useContext(Context);

  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    categories.findIndex((category) => {
      if (category.id == catId.categoryId)
        return setSelectedCategory(category.name);
    });

    setSelectedProducts(() => {
      return products.filter((product) => {
        if (product.category === selectedCategory) return true;
      });
    });
  });

  return (
    <>
      <div className="selected-category">
        <ProductsItem>{selectedProducts}</ProductsItem>
      </div>
    </>
  );
};

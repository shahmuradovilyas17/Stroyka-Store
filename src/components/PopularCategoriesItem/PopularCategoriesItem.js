import { useContext } from "react";
import "./PopularCategoriesItem.scss";
import { Context } from "../../App";

export const PopularCategoriesItem = () => {
  const { categories } = useContext(Context);
  return (
    <div className="category-items">
      {categories.map((category) => {
        return (
          <div className="category-item" id={category.id}>
            <div className="category-item-name">{category.name}</div>
            <img src={category.image} alt={category.name} />
          </div>
        );
      })}
    </div>
  );
};

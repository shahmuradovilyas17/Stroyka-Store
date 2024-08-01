import { useContext } from "react";
import "./PopularCategoriesItem.scss";
import { Context } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

export const PopularCategoriesItem = () => {
  const { categories } = useContext(Context);

  const navigate = useNavigate();
  return (
    <div className="category-items">
      {categories.map((category) => {
        return (
          <div
            className="category-item"
            key={category.id}
            onClick={() => {
              navigate(`/categories/${category.id}`);
            }}
          >
            <div className="category-item-name">{category.name}</div>
            <img src={category.image} alt={category.name} />
          </div>
        );
      })}
    </div>
  );
};

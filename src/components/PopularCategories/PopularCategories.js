import { useNavigate } from "react-router-dom";
import { PopularCategoriesItem } from "../PopularCategoriesItem/PopularCategoriesItem";
import "./PopularCategories.scss";

export const PopularCategories = () => {
  const navigate = useNavigate();
  return (
    <div className="popular-categories">
      <div className="popular-categories-top">
        <div className="popular-categories-top-title">Популярные категории</div>
        <button
          className="popular-categories-top-all"
          onClick={() => {
            navigate("/categories");
          }}
        >
          Все категории
        </button>
      </div>
      <PopularCategoriesItem />
    </div>
  );
};

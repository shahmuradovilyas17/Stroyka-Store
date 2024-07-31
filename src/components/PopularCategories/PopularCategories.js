import { PopularCategoriesItem } from "../PopularCategoriesItem/PopularCategoriesItem";
import "./PopularCategories.scss";

export const PopularCategories = () => {
  return (
    <div className="popular-categories">
      <div className="popular-categories-top">
        <div className="popular-categories-top-title">Популярные категории</div>
        <button className="popular-categories-top-all">Все категории</button>
      </div>
      <div className="popular-categories-items">
        <PopularCategoriesItem />
      </div>
    </div>
  );
};

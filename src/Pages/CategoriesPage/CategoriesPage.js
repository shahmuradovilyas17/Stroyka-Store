import { PopularCategoriesItem } from "../../components/PopularCategoriesItem/PopularCategoriesItem";
import "./CategoriesPage.scss";
import CategoryFrame from "../../assets/images/Categories.jpg";

export const CategoriesPage = () => {
  return (
    <>
      <div className="all-categories-frame">
        <img src={CategoryFrame} alt="frame" />
        <div className="all-categories-frame-title">Все категории</div>
      </div>
      <div className="all-categories">
        <PopularCategoriesItem />
      </div>
    </>
  );
};

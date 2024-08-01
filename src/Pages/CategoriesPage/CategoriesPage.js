import { PopularCategoriesItem } from "../../components/PopularCategoriesItem/PopularCategoriesItem";

export const CategoriesPage = () => {
  return (
    <>
      <div className="popular-categories">
        <div className="popular-categories-top">
          <div className="popular-categories-top-title">Все Категории</div>
        </div>
        <PopularCategoriesItem />
      </div>
    </>
  );
};

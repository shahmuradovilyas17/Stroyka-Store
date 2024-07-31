import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  category11,
  category12,
} from "./images";
import "./PopularCategoriesItem.scss";

export const PopularCategoriesItem = () => {
  const categories = [
    {
      id: 1,
      name: "Душевые",
      image: category1,
    },
    {
      id: 2,
      name: "Пиломатериалы",
      image: category2,
    },
    {
      id: 3,
      name: "Линолеум",
      image: category3,
    },
    {
      id: 4,
      name: "Обои",
      image: category4,
    },
    {
      id: 5,
      name: "Инструменты",
      image: category5,
    },
    {
      id: 6,
      name: "Товары для дачи",
      image: category6,
    },
    {
      id: 7,
      name: "Окна",
      image: category7,
    },
    {
      id: 8,
      name: "Двери",
      image: category8,
    },
    {
      id: 9,
      name: "Сантехника",
      image: category9,
    },
    {
      id: 10,
      name: "Краски",
      image: category10,
    },
    {
      id: 11,
      name: "Электротовары",
      image: category11,
    },
    {
      id: 12,
      name: "Интерьер",
      image: category12,
    },
  ];

  return categories.map((category) => {
    return (
      <div className="category-item" id={category.id}>
        <div className="category-item-name">{category.name}</div>
        <img src={category.image} alt={category.name} />
      </div>
    );
  });
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { CategoriesPage } from "./Pages/CategoriesPage/CategoriesPage";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/Footer";
import { createContext, useState } from "react";
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
} from "./components/PopularCategoriesItem/images";
import { SelectedCategoryPage } from "./Pages/SelectedCategoryPage/SelectedCategoryPage";
import { SelectedProductPage } from "./Pages/SelectedProductPage/SelectedProductPage";
import {
  product1,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "./assets/images/productsImages";

export const Context = createContext();

export const App = () => {
  const [categories, setCategories] = useState([
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
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      img: product1,
      descr: "Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)",
      category: "Краски",
      price: 449,
    },
    {
      id: 2,
      img: product2,
      descr:
        "Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная",
      category: "Сантехника",
      price: 495,
    },
    {
      id: 3,
      img: product3,
      descr: "Сетка 'Рабица' яч. 50х50/1,5х10 м-ОЦ",
      category: "Товары для дачи",
      price: 1499,
    },
    {
      id: 4,
      img: product4,
      descr: "Металлочерепица, цвет коричневый, 1.18 х 1.15 м",
      category: "Интерьер",
      price: 769,
    },
    {
      id: 5,
      img: product5,
      descr: "Керамогранит Yasmin 598х185 коричневый C-YA4M112D",
      category: "Пиломатериалы",
      price: 899,
    },
    {
      id: 6,
      img: product6,
      descr: "Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг",
      category: "Обои",
      price: 275,
    },
    {
      id: 7,
      img: product7,
      descr: "Грунтовка Старатели 10л глубокого проникновения",
      category: "Обои",
      price: 839,
    },
    {
      id: 8,
      img: product8,
      descr: "Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
      category: "Пиломатериалы",
      price: 335,
    },
    {
      id: 9,
      img: product9,
      descr: "Профиль 0,55мм для гипсокартона",
      category: "Пиломатериалы",
      price: 195,
    },
    {
      id: 10,
      img: product10,
      descr: "Рулетка 3м",
      category: "Инструменты",
      price: 100,
    },
    {
      id: 11,
      img: product11,
      descr: "Кнауф Мп 75 штукатурка гипсовая МН 30кг",
      category: "Обои",
      price: 380,
    },
    {
      id: 12,
      img: product12,
      descr: "Уголок серый канализационный Д110 ГР90",
      category: "Сантехника",
      price: 335,
    },
    {
      id: 13,
      img: product13,
      descr: "Knauf Ротбанд, 30 кг",
      category: "Обои",
      price: 508,
    },
    {
      id: 14,
      img: product14,
      descr: "Саморез по металлу 3,5х25 мм для гипсокартона",
      category: "Инструменты",
      price: 340,
    },
    {
      id: 15,
      img: product15,
      descr: "Шпатлевка универсальная Danogips SuperFinish 17 л",
      category: "Обои",
      price: 2555,
    },
    {
      id: 16,
      img: product16,
      descr: "Клейкая лента металлизированная Изоспан FL 5х5000 см",
      category: "Инструменты",
      price: 226,
    },
    {
      id: 17,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEZBfGPsVaESlxfCYGZLvRVC0j3LrT8S4qg&s",
      descr: "Дрель ударная",
      category: "Инструменты",
      price: 2000,
    },
    {
      id: 18,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5gRNhONth6_bGFWnUdKurfMp3Gg40ex4gg&s",
      descr: "Шуруповёрт аккумуляторный",
      category: "Инструменты",
      price: 1800,
    },
    {
      id: 19,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VsDhY2Id_gKg27nsJlX8TQnLBARdrL4snQ&s",
      descr: "Клей ПВА строительный",
      category: "Клеи и герметики",
      price: 120,
    },
    {
      id: 20,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rhr8WltPtGwIAWnVsglCyNgxEgfHgVJTog&s",
      descr: "Сетка рабица",
      category: "Сеточные материалы",
      price: 500,
    },
    {
      id: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDKz5eF1b2SK0Rijw-k5n10nzRSXdXCVbBA&s",
      descr: "Плитка керамическая",
      category: "Отделочные материалы",
      price: 400,
    },
    {
      id: 22,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVi0ENJH08sCiSVqMnhQNHbE9INZM0T6fBA&s",
      descr: "Краска акриловая белая",
      category: "Отделочные материалы",
      price: 750,
    },
    {
      id: 23,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPddZnm9smEwL-or8JD4eIlEbu7BV5qhagAw&s",
      descr: "Рулетка ",
      category: "Инструменты",
      price: 200,
    },
    {
      id: 24,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51y_wvqzee5ALB3RbyG3gUQG3Pizos5GUIg&s",
      descr: "Лестница алюминиевая",
      category: "Инструменты",
      price: 2500,
    },
    {
      id: 25,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQYKis2aZ5ssa4jZugO-wgs5O6jnj1JSlow&s",
      descr: "Кирпич красный строительный",
      category: "Пиломатериалы",
      price: 20,
    },
    {
      id: 26,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNBtuEnpzN9U8OuEd7JwLI9SMGUNSJzM9Tw&s",
      descr: "Проволока вязальная",
      category: "Крепеж",
      price: 100,
    },
    {
      id: 27,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs95qWoerAmzq5_8m1LNqJchq54K4Tibg2PQ&s",
      descr: "Герметик силиконовый",
      category: "Клеи и герметики",
      price: 150,
    },
    {
      id: 28,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLh352wxG8DcjOLdbVJn_6o4XPjYOpNGQvtw&s",
      descr: "Труба ПВХ 50мм",
      category: "Сантехника",
      price: 180,
    },
    {
      id: 29,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47SbHxe7aum7Hj2UzfpHa_RL58deArx3n6Q&s",
      descr: "Пена монтажная",
      category: "Клеи и герметики",
      price: 200,
    },
    {
      id: 30,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrwgGPzIb_gM7ouBArKbXmFLecg80DP7bFg&s",
      descr: "Плиточный клей",
      category: "Клеи и герметики",
      price: 300,
    },
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  const [prodCount, setProdCount] = useState(1);

  return (
    <>
      <Context.Provider
        value={{
          categories,
          products,
          setProducts,
          setCategories,
          cartProducts,
          setCartProducts,
          prodCount,
          setProdCount,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/categories/:categoryId"
              element={<SelectedCategoryPage />}
            />
            <Route
              path="/products/:productId"
              element={<SelectedProductPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </>
  );
};

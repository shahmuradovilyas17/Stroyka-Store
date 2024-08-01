import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { CategoriesPage } from "./Pages/CategoriesPage/CategoriesPage";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

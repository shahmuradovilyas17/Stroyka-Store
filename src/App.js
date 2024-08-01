import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { PopularCategories } from "./components/PopularCategories/PopularCategories";
import { Products } from "./components/Products/Products";
import { Slider } from "./components/Slider/Slider";

export const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <PopularCategories />
      <Products />
      <Footer />
    </>
  );
};

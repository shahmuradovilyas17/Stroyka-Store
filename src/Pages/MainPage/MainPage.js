import { Footer } from "../../components/Footer/Footer";
import { PopularCategories } from "../../components/PopularCategories/PopularCategories";
import { Products } from "../../components/Products/Products";
import { Slider } from "../../components/Slider/Slider";

export const MainPage = () => {
  return (
    <>
      <Slider />
      <PopularCategories />
      <Products />
    </>
  );
};

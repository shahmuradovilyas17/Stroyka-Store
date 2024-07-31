import { Header } from "./components/Header/header";
import { PopularCategories } from "./components/PopularCategories/PopularCategories";
import { Slider } from "./components/Slider/Slider";

export const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <PopularCategories />
    </>
  );
};

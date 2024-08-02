import firstSlide from "../../assets/images/slide-1.jpg";
import secondSlide from "../../assets/images/slide-2.jpg";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "./Slider.scss";

export const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      title: "Специальные предложения",
      desc: "на строительные материалы и товары для ремонта",
      image: firstSlide,
    },
    {
      id: 2,
      title: "Распродажа инструментов",
      desc: "«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой",
      image: secondSlide,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Keyboard, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard
        mousewheel
        navigation
        scrollbar={{ draggable: true }}
      >
        {sliderItems.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="slider-item" key={item.id}>
                <img src={item.image} alt="slider" />
                <div className="slider-item-title">{item.title}</div>
                <div className="slider-item-desc">{item.desc}</div>
                <button className="slider-item-button">Подробнее</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

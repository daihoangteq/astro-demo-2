import React, {useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface Props {
  data: {
    title: string;
    image: string;
  }[];
}
const List: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    console.log("Hello List");
  }, []);
  return (
    <>
      {" "}
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
    //    centeredSlides
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <img src={item.image} alt={item.title}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default List;

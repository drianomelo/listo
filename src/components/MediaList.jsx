import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MediaItem } from "./MediaItem";

export const MediaList = ({ title, medias }) => {
  return (
    <div className="w-full bg-transparent pl-14 relative -top-36">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={6}
        slidesPerView={6.5}
        navigation
        pagination={{ clickable: true }}
      >
        <h3 className="text-slate-50 font-bold absolute top-0">{title}</h3>

        {medias.map((media) => {
          return (
            <SwiperSlide>
              <MediaItem media={media} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function MainMediaSlider({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      <div className="flex justify-center gap-x-2">
        <div className="shrink h-96">
          <Swiper
            direction={'vertical'}
            spaceBetween={1}
            slidesPerView={6}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper swiper-product-details-thumb"
            onSwiper={setThumbsSwiper}
            freeMode={true}
            watchSlidesProgress={true}
          >
            {items.map(elem => {
              return (
                <SwiperSlide key={elem.id}>
                  <div className="h-14 w-14 rounded-lg flex justify-center border border-slate-300 p-1">
                    <img src={elem} className="rounded-lg" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="p-5 rounded-lg border border-slate-300 shrink">
          <div className="h-96 w-80">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              navigation={true}
            >
              {items.map(elem => {
                console.log(elem);
                return (
                  <SwiperSlide key={elem.id}>
                    <img src={elem} className="rounded-lg" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMediaSlider;

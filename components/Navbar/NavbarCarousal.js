import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';

import slide_image_1 from "../../public/assets/images/Card 1.svg";
import slide_image_2 from '../../public/assets/images/card2.svg';
import slide_image_3 from '../../public/assets/images/card3.svg';

export default function NavbarCarousal(){
    return(
        <>
                  <Swiper
                  style={{width:"300px"}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
        }}
        centerInsufficientSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src= {slide_image_1.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src={slide_image_2.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src={slide_image_3.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src= {slide_image_1.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src={slide_image_2.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide style={{display:"flex",justifyContent:"center"}}>
          <img src={slide_image_3.src} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
        </>
    )
}
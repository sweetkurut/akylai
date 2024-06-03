"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import img1 from "@/public/images/review1.png";
import img2 from "@/public/images/review2.png";
import img3 from "@/public/images/review3.png";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Review.module.scss";
import "./swiper.scss";
import Image from "next/image";

export const Review = () => {
  return (
    <section className={styles.review} id="review">
      <div className="container">
        <h2 className={`${styles.review__title} def-title`}>
          Здесь <span className={styles.review__span}>отзывы</span> тех, кто
          прошел мою терапию
        </h2>

        <Swiper
          modules={[Navigation, Keyboard]}
          className={styles.swiper}
          navigation
          keyboard
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={1}
          centeredSlides={true}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img1} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img2} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img3} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img2} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img1} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className={styles.card} target="_blank">
              <Image src={img3} alt="video" priority={false} />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

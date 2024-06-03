"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import img1 from "@/public/images/review1.png";
import img2 from "@/public/images/review2.png";
import img3 from "@/public/images/review3.png";
import img4 from "@/public/images/review4.png";
import img5 from "@/public/images/review5.png";
import img6 from "@/public/images/review6.png";
import img7 from "@/public/images/review7.png";
import img8 from "@/public/images/review8.png";
import img9 from "@/public/images/review9.png";

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
            <a
              href="https://youtu.be/qJhWmo1lF-c?si=ShogJNa-cBwpjy6a"
              className={styles.card}
              target="_blank"
            >
              <Image src={img1} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtube.com/shorts/A1JVr4nOncE?si=DmsQnn0Qe3lBb9Yc"
              className={styles.card}
              target="_blank"
            >
              <Image src={img2} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtube.com/shorts/NjtmpaRCvc8?si=G5FFUfnBcsenX-xB"
              className={styles.card}
              target="_blank"
            >
              <Image src={img3} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtu.be/iMXczAnh-Jc?si=CnLGrLfY3o2OIATu"
              className={styles.card}
              target="_blank"
            >
              <Image src={img4} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtu.be/P7faK6iUV8M?si=BdjWK9OU4bzNqrU9"
              className={styles.card}
              target="_blank"
            >
              <Image src={img5} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtu.be/c2PqtI3uAW4?si=2xPnbxpzwyThI0WO"
              className={styles.card}
              target="_blank"
            >
              <Image src={img6} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtube.com/shorts/SmcJthJRM6s?si=UnspE2GLhOcsJfOv"
              className={styles.card}
              target="_blank"
            >
              <Image src={img7} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtu.be/mrRtVcXhBDM?si=vLISlmLgkOssI_4K"
              className={styles.card}
              target="_blank"
            >
              <Image src={img8} alt="video" priority={false} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://youtu.be/mrRtVcXhBDM?si=vLISlmLgkOssI_4K"
              className={styles.card}
              target="_blank"
            >
              <Image src={img9} alt="video" priority={false} />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

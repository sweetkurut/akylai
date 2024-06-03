import React from "react";
import styles from "./Method.module.scss";
import Image from "next/image";
import photo from '@/public/images/Akylai__method.png'

export const Method = () => {
  return (
    <section className={styles.method} id="about">
      <div className="container">
        <h2 className={`${styles.method__title} def-title`}>
          Этот метод не только{" "}
          <span className={styles.method__orangeSpan}>
            гарантированно поможет{" "}
          </span>
          Вам, но и даст стойкий
          <span className={styles.method__orangeSpan}> результат</span>
        </h2>
        <div className={styles.method__content}>
          <div className={styles.method__about}>
            <div className={styles.method__question}>
              <h3 className={styles.method__subTitle}>
                Кто я, чтобы это утверждать?
              </h3>
            </div>
            <div className={styles.method__text}>
              <h4>Меня зовут Саткынбаева Акылай</h4>
              <p>
                Я являюсь сертифицированным специалистом в области подсознания,
                помогаю людям трансформировать те области их жизни, которые
                причиняют им дискомфорт и боль
              </p>
              <p>
                А ещё я та, кто сама на себе испробовала все вышесказанное, и
                убедилась что это все не работает!
              </p>
            </div>
          </div>
          <div className={styles.method__photo}>
            <Image src={photo} alt='фотография автора курса' priority={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

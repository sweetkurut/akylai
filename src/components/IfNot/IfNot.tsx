"use client";

import styles from "./IfNot.module.scss";
import Form from "./Form/Form";

export const IfNot = () => {
  return (
    <section className={styles.ifnot} id="form">
      <div className="container">
        <div className={styles.ifnot__firstCard}>
          <div className={styles.ifnot__cardTitle1}>
            <h3 className={styles.card__title1}>
              А что если у меня не получится?
            </h3>
          </div>
        </div>
        <div className={styles.ifnot__grid}>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <h3 className={styles.card__title}>Вечное знание</h3>
            <p className={styles.card__text}>
              Знания остаются с Вами на всю жизнь. Вы можете использовать его в
              любых ситуациях
            </p>
          </div>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <h3 className={styles.card__title}>
              Быстрые, эффективные трансформации
            </h3>
            <p className={styles.card__text}>
              Без хитросплетенных схем которые нужно заучивать. Гениальность в
              простоте
            </p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

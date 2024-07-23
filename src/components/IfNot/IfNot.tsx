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
            <p className={styles.card__text}>
            Для этого я подробно рассказываю в трёх блоках,  как использовать данную технику. Она очень проста, но очень мощная. 
            И если Вы способны чувствовать, то сработает на 100% 
            </p>
          </div>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <p className={styles.card__text}>
            За 2499 рублей Вы получите точечное знание без лишней воды , которое как верный Ваш помощник будет помогать во всех сферах детятельности на протяжении всей Вашей жизни 
            </p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

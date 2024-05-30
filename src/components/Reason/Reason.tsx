import styles from "./Reason.module.scss";
export const Reason = () => {
  return (
    <section className={styles.reason}>
      <div className={`${styles.reason__container} container`}>
        <h2 className={`${styles.reason__title} def-title`}>
          Эта техника взята из{" "}
          <span className={styles.reason__span}>терапии подсознания</span>, с
          ней ранее вы не были знакомы потому что
        </h2>
        <div className={styles.reason__ab}>
          <div className={styles.reason__reason}>
            <p>а{")"} она современная, ускоренная и упрощённая</p>
          </div>
          <div className={styles.reason__reason}>
            <p>б{')'} если бы Вы знали про нее, то уже помогли бы себе</p>
          </div>
        </div>
        <h3 className={styles.reason__secondTitle}>
          Скорее всего, Вы пробовали себе помочь посредством
        </h3>
        <div className={styles.reason__cardsLine}>
          <div className={styles.reason__cards}>
            <div className={`${styles.reason__card} ${styles.reason__card1}`}>книжек</div>
            <div className={`${styles.reason__card} ${styles.reason__card2}`}>тренингов</div>
          </div>
          <div className={`${styles.reason__cards} ${styles.reason__cards2}` }>
            <div className={`${styles.reason__card} ${styles.reason__card3}`}>психологов</div>
            <div className={`${styles.reason__card} ${styles.reason__card4}`}>коучей </div>
          </div>
        </div>
        <div className={styles.reason__cardsLine2}>
          <div className={styles.reason__cards}>
            <div className={`${styles.reason__card} ${styles.reason__card5}`}>энергопрактик</div>
          </div>
          <div className={`${styles.reason__cards} ${styles.reason__cards2}`}>
            <div className={`${styles.reason__card} ${styles.reason__card6}`}>разговорами с друзьями</div>
          </div>
        </div>
        <span className={styles.reason__nothing}>но все было тщетно...</span>
      </div>
    </section>
  );
};

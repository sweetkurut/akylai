import styles from "./Advantages.module.scss";

export const Advantages = () => {
  return (
    <section className={styles.advantages} id="advantages">
      <div className="container">
        <h2 className={`${styles.advantages__title} def-title`}>
          <span className={styles.advantages__orangeSpan}>Преимущества</span> данного метода
        </h2>
        <div className={styles.advantages__grid}>
          <div className={`${styles.advantages__gridFlex} ${styles.advantages__gridFlex2}`}>
            <div className={`${styles.advantages__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Быстрые, эффективные трансформации</h3>
              <p className={styles.card__text}>Без хитросплетенных схем которые нужно заучивать. Гениальность в простоте</p>
            </div>
            <div className={`${styles.advantages__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Экономия времени и ресурсов</h3>
              <p className={styles.card__text}>Больше не нужно подстраиваться под чужое время. Метод можно применять в любое время и в любом месте, где Вы сможете уединиться на 15-30 минут.</p>
            </div>
          </div>
          <div className={`${styles.advantages__gridFlex} ${styles.advantages__gridFlex1}`}>
            <div className={`${styles.advantages__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Вечное знание</h3>
              <p className={styles.card__text}>Знания остаются с Вами на всю жизнь. Вы можете использовать его в любых ситуациях</p>
            </div>
            <div className={`${styles.advantages__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Эффективная помощь</h3>
              <p className={styles.card__text}>
              Если Вы психолог/психотерапевт, внедрив эту технику в свои сессии, Вы сможете быстро и эффективно помогать своим клиентам, давая им гарантию на результат
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

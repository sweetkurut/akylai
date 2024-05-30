import styles from "./Technique.module.scss";

export const Technique = () => {
  return (
    <section className={styles.technique} id="technique">
      <div className="container">
        <h2 className={`${styles.technique__title} def-title`}>
          Применив эту{" "}
          <span className={styles.technique__orangeSpan}>технику</span> Вы
          сможете <span className={styles.technique__orangeSpan}>навсегда</span>{" "}
          избавиться от:
        </h2>
        <div className={styles.technique__grid}>
          <div className={`${styles.technique__gridFlex} ${styles.technique__gridFlex1}`}>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Чувства одиночества</h3>
              <p className={styles.card__text}>Чувство вины</p>
            </div>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Депресии</h3>
              <ul className={styles.card__text}>
                <li>Нехватка энергии</li>
                <li>Апатия</li>
                <li>Раздражительность</li>
                <li>Нестабильное эмоциональное состояние</li>
                <li>Жизнь кажется серой и однообразной</li>
                <li>Непонимание своих истинных потребностей</li>
                <li>Безвыходность</li>
                <li>Неверие что можно жить по-другому</li>
              </ul>
            </div>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Неуверенности</h3>
            </div>
          </div>
          <div className={`${styles.technique__gridFlex} ${styles.technique__gridFlex2}`}>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Блоков в отношениях</h3>
              <p className={styles.card__text}>Одни и те же типажи с которыми вы несчастливы </p>
            </div>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Финансовых блоков</h3>
              <p className={styles.card__text}>Денег хватает лишь на базовые потребности, "не везёт", родовая программа бедности и т.д.</p>
            </div>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Страх осуждения </h3>
              <ul className={styles.card__text}>
                <li>Страх совершить ошибку</li>
                <li>Страх нищеты</li>
                <li>Страх будущего</li>
              </ul>
            </div>
            <div className={`${styles.technique__card} ${styles.card}`}>
              <h3 className={styles.card__title}>Табакокурение</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

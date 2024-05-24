import styles from './Technique.module.scss'

export const Technique = () => {
  return(
    <section className={styles.technique}>
      <div className={`${styles.technique__container} container`}>
        <h2 className={`${styles.technique__title} def-title`}>
          Применив эту <span>технику </span> Вы сможете <span>навсегда </span> избавиться от:
        </h2>
        <ul className={styles.technique__list}>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Чувства одиночества</h3>
            <p className={styles.technique__text}>Чувство вины</p>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Блоков в отношениях</h3>
            <p className={styles.technique__text}>Одни и те же типажи с которыми вы несчастливы</p>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Депрессии</h3>
            <p className={styles.technique__text}>Нехватка энергии</p>
            <p className={styles.technique__text}>Апатия</p>
            <p className={styles.technique__text}>Раздражительность</p>
            <p className={styles.technique__text}>Нестабильное эмоциональное состояние</p>
            <p className={styles.technique__text}>Жизнь кажется серой и однообразной </p>
            <p className={styles.technique__text}>Непонимание своих истинных потребностей</p>
            <p className={styles.technique__text}>Безвыходность</p>
            <p className={styles.technique__text}>Неверие что можно жить по-другому</p>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Финансовых блоков</h3>
            <p className={styles.technique__text}>Денег хватает лишь на базовые потребности, "не везёт", родовая программа бедности и т.д.</p>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Страх осуждения</h3>
            <p className={styles.technique__text}>Страх совершить ошибку</p>
            <p className={styles.technique__text}>Страх нищеты</p>
            <p className={styles.technique__text}>Страх будущего</p>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Неуверенности</h3>
          </li>
          <li className={styles.technique__item}>
            <h3 className={styles.technique__itemTitle}>Табакокурение</h3>
          </li>
        </ul>

      </div>
    </section>
  )
}
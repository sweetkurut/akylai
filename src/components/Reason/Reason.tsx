import styles from './Reason.module.scss'
export const Reason = () => {
  return(
    <section className={styles.reason}>
      <div className={`${styles.reason__container} container`}>
        <h2 className={`${styles.reason__title} def-title`}>
          Эта техника взята из терапии подсознания, 
          с ней ранее вы не были знакомы потому что
        </h2>
        <ul className={styles.reason__list}>
          <li className={styles.reason__item}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sint.</p>
          </li>
          <li className={styles.reason__item}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sint.</p>
          </li>
        </ul>
        <h3 className={styles.reason__secondTitle}>
          Скорее всего, Вы пробовали себе помочь посредством
        </h3>
        <ul className={styles.reason__blocksWrapper}>
          <li className={styles.reason__blocks}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut.</p>
          </li>
          <li className={styles.reason__blocks}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
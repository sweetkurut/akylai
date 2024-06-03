import styles from "./Review.module.scss";

export const Review = () => {
  return (
    <section className={styles.review} id="review">
      <div className="container">
        <h2 className={`${styles.review__title} def-title`}>
          Здесь <span className={styles.review__span}>отзывы</span> тех, кто
          прошел мою терапию
        </h2>
      </div>
    </section>
  )
}
import Image from 'next/image'
import styles from './Hero.module.scss'
import heroImg from '@/public/images/hero-img.jpg'

export const Hero = () => {
  return(
    <section className={styles.hero}>
      <div className={`${styles.hero__container} container`}>
        <div className={styles.hero__wrapper}>
          <h1 className={styles.hero__title}>
            <span>Трансформируйте </span>
            себя раз и навсегда
          </h1>
          <p className={styles.hero__subtitle}>
            простой, быстрый и эффективный метод, который действительно работает
          </p>
          <div className={styles.hero__imgWrapper}>
            <Image src={heroImg} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}
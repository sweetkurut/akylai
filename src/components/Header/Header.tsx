"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const modalMenu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const modal = modalMenu.current;
    if (modal) {
      modal.style.display = "none";
    }
  }, []);

  const openMenu = () => {
    const modal = modalMenu.current;
    if (modal) {
      modal.style.display = "block";

      setTimeout(() => {
        (modal.style.visibility = "visible"), (modal.style.opacity = "1");
      }, 100);
    }
  };
  const closeMenu = () => {
    const modal = modalMenu.current;
    if (modal) {
      modal.style.opacity = "0";
      setTimeout(() => {
        (modal.style.visibility = "hidden"), (modal.style.display = "none");
      }, 100);
    }
  };

  return (
    <header id={styles.header} className={`${styles.header} container`}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__menu}>
          <li>
            <a href="#technique" className={styles.header__link}>
              О технике
            </a>
          </li>
          <li>
            <a href="#about" className={styles.header__link}>
              Обо мне
            </a>
          </li>
          <li>
            <a href="#review" className={styles.header__link}>
              Отзывы
            </a>
          </li>
          <li>
            <a href="#advantages" className={styles.header__link}>
              Преимущества
            </a>
          </li>
          <li>
            <a href="#price" className={styles.header__link}>
              Стоимость
            </a>
          </li>
          <li>
            <button className={styles.header__btn}><a href="#form">Получить доступ</a></button>
          </li>
        </ul>
      </nav>
      <button className={styles.header__burger} onClick={openMenu} hidden>
        <div className={styles.burger__btn_line}></div>Меню
      </button>
      <div className={`${styles.burger__section} burger`} ref={modalMenu}>
        <div className="container">
          <div className={styles.burger__header}>
            <button className={styles.burger__close} onClick={closeMenu}>
              <div className={styles.burger__line_x}></div>Меню
            </button>
          </div>
          <div className={styles.burger__container}>
            <nav>
              <ul className={styles.burger__menu}>
                <li>
                  <a
                    href="#technique"
                    onClick={closeMenu}
                    className={styles.header__link}
                  >
                    О технике
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className={styles.header__link}
                  >
                    Обо мне
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    onClick={closeMenu}
                    className={styles.header__link}
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#advantages"
                    onClick={closeMenu}
                    className={styles.header__link}
                  >
                    Преимущества
                  </a>
                </li>
                <li>
                  <a
                    href="#price"
                    onClick={closeMenu}
                    className={styles.header__link}
                  >
                    Стоимость
                  </a>
                </li>
                <li>
                  <button onClick={closeMenu} className={styles.header__btn}>
                    <a href="#form">
                    Получить доступ
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

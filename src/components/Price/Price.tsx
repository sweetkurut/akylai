import React from "react";
import styles from "./Price.module.scss";

export const Price = () => {
  return (
    <section className={styles.price} id="price">
      <div className="container">
        <h2 className={`${styles.price__title} def-title`}>
          Эти ценные знания могут{" "}
          <span className={styles.price__orangeSpan}>изменить жизнь</span> и
          избавить от многолетних проблем, с которыми никто не смог помочь
        </h2>
        <div className={styles.price__content}>
          <div className={styles.price__text}>
            <p>Всего за</p>
            <h3>2499 рублей</h3>
            <p>
              Вы приобретаете{" "}
              <span className={styles.price__orangeSpan}>уникальный</span>,
              автономный продукт на всю жизнь, с которым Вы:
            </p>
            <ul>
              <li>- Прокачаете уверенность в себе </li>
              <li>- Сможете увеличить доходы</li>
              <li>- Наладите отношения с собой и с близкими </li>
              <li>- Уйдут психологические блоки, зажимы</li>
              <li>- Появится энергия и интерес к жизни </li>
              <li>
                - Проработаете психотравмы детства, так или иначе влияющие на
                Вашу сегодняшнюю жизнь
              </li>
              <li>- Жизнь обретёт новые краски</li>
              <li>И это ещё не весь список</li>
            </ul>
          </div>
          <div className={styles.price__motivation}>
            <div className={styles.price__transpText}>
              <p>
                Но если Вы НЕ ГОТОВЫ к переменам, НЕ ГОТОВЫ попращаться со
                старыми паттернами мышления, которые привели Вас туда, где Вы
                сейчас, тогда лучше закройте страницу  прямо сейчас и забудьте
                про все что Вы узнали до этого
              </p>
              <p>
                Ну а если Вы полны решимости выйти из замкнутого круга , из
                петли - тогда буду рада передать Вам ценную информацию в своем
                мини-курсе <span>&quot;Трансформация&quot;</span>
              </p>
            </div>
            <div className={styles.price__remember}>
              <p>
                Вспомните юность, когда жизнь была яркой и оптимистичной. Теперь
                у вас есть и мудрость, и опыт
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
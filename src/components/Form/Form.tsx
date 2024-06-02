import axios from "axios";
import styles from "./Form.module.scss";

export const Form = () => {

  return (
    <div className="container">
      <form className={styles.form} id="form">
        <div className={styles.form__inputs}>
          <input
            type="text"
            name=""
            id=""
            placeholder="ФИО"
            className={styles.form__inp}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Реквизиты карты"
            className={styles.form__inp}
          />
        </div>
        <button type="submit" className={styles.form__submit}>
          получить доступ к урокам
        </button>
      </form>
    </div>
  );
};

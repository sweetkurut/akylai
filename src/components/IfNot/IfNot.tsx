"use client";

import axios from "axios";
import styles from "./IfNot.module.scss";
import { useState } from "react";
import { mask1 } from "./js-inputmask.js";
mask1;

export const IfNot = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const reqBody = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await axios.post(
        "http://localhost:3003/applications",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.error("There was an error!", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.ifnot} id="form">
      <div className="container">
        <div className={styles.ifnot__firstCard}>
          <div className={styles.ifnot__cardTitle1}>
            <h3 className={styles.card__title1}>
              А что если у меня не получится?
            </h3>
          </div>
        </div>
        <div className={styles.ifnot__grid}>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <h3 className={styles.card__title}>Вечное знание</h3>
            <p className={styles.card__text}>
              Знания остаются с Вами на всю жизнь. Вы можете использовать его в
              любых ситуациях
            </p>
          </div>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <h3 className={styles.card__title}>
              Быстрые, эффективные трансформации
            </h3>
            <p className={styles.card__text}>
              Без хитросплетенных схем которые нужно заучивать. Гениальность в
              простоте
            </p>
          </div>
        </div>
        <div id={styles.msform}>
          <form className={styles.form} onSubmit={sendData}>
            <h2 className={styles.fs_title}>Оставьте заявку</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Имя"
              onChange={handleChange}
              value={formData.fullName}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className="tel"
              required
            />
            <button
              type="submit"
              name="next"
              className={`${styles.action_button} ${styles.next}`}
              disabled={isLoading}
            >
              Отправить заявку
            </button>
          </form>
          {isLoading && <p>Отправка данных...</p>}
          {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
          {success && (
            <p style={{ color: "green" }}>Заявка успешно отправлена!</p>
          )}
        </div>
      </div>
    </form>
  );
};

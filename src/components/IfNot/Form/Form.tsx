"use client";

import React, { useState } from "react";
import styles from "./form.module.scss";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    login: "",
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
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    e.preventDefault();

    const reqBody = {
      fullName: formData.fullName,
      login: formData.login,
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
    <div className={styles.wrapper}>
      <div id={styles.msform}>
        <form className={styles.form} onSubmit={sendData}>
          <h2 className={styles.fs_title}>Оставьте заявку</h2>

          <input
            type="text"
            name="fullName"
            placeholder="ФИО"
            onChange={handleChange}
            value={formData.fullName}
            required
          />
          <input
            type="text"
            name="login"
            placeholder="Никнейм Telegram аккаунта"
            onChange={handleChange}
            value={formData.login}
            required
          />
          <input
            type="tel"
            placeholder="Введите номер WhatsApp или Telegram"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="tel"
            required
          />
          <button
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
  );
};

export default Form;

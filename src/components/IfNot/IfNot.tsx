"use client"

import axios from "axios";
import styles from "./IfNot.module.scss";
import { useState } from "react";
import { mask1 } from "./js-inputmask.js"
  mask1
export const IfNot = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const { name, email, phone } = formData;

  const reqBody = [name, email, phone];




  const sendData = async(e) => {
e.preventDefault()
    console.log(reqBody);
    
    try {
      const resp = await axios.post("http://192.168.68.154:3003/applications", reqBody)   
      console.log(resp);
    } catch (error) {
      console.error(error);
      
    }
  }

  

  return (
    <section className={styles.ifnot}  id="form">
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
            <p className={styles.card__text}>
            Для этого я подробно рассказываю в трёх блоках,  как использовать данную технику. Она очень проста, но очень мощная. 
            И если Вы способны чувствовать, то сработает на 100% 
            </p>
          </div>
          <div className={`${styles.ifnot__card} ${styles.card}`}>
            <p className={styles.card__text}>
            За 2499 рублей Вы получите точечное знание без лишней воды , которое как верный Ваш помощник будет помогать во всех сферах детятельности на протяжении всей Вашей жизни 
            </p>
          </div>
        </div>
        <div id={styles.msform}>
          <form className={styles.form} onSubmit={sendData} >
            <h2 className={styles.fs_title}>Оставьте заявку</h2>
            
            <input type="text" name="name" placeholder="Имя"  onInput={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={email} required onInput={handleChange} />
            <input
              type="tel"
              placeholder="Телефон"
              name="phone"
              value={phone}
              onInput={handleChange} 
              className="tel"
              required
            />
            <input
              type="submit"
              name="next"
              className={`${styles.action_button} ${styles.next}`}
              
              value="Отправить заявку"
              
            />
          </form>
        </div>
      </div>
    </section>
  );
};

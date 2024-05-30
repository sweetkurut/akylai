import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/src/components/Hero/Hero";
import { Technique } from "../components/Technique/Technique";
import { Reason } from "../components/Reason/Reason";
import { Method } from "../components/Method/Method";
import { Review } from "../components/Review/Review";
import { Price } from "../components/Price/Price";
import { Advantages } from "../components/Advantages/Advantages";
import { IfNot } from "../components/IfNot/IfNot";
import { Form } from "../components/Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Technique />
      <Reason />
      <Method />
      <Review />
      <Advantages />
      <Price />
      <IfNot />
      <Form />
    </main>
  );
}

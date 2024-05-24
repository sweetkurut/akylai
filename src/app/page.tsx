import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from '@/src/components/Hero/Hero';
import { Technique } from "../components/Technique/Technique";
import { Reason } from "../components/Reason/Reason";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Technique />
      {/* <Reason /> */}
    </main>
  );
}

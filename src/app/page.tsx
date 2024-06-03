import { Hero } from "@/src/components/Hero/Hero";
import { Technique } from "../components/Technique/Technique";
import { Reason } from "../components/Reason/Reason";
import { Method } from "../components/Method/Method";
import { Review } from "../components/Review/Review";
import { Price } from "../components/Price/Price";
import { Advantages } from "../components/Advantages/Advantages";
import { IfNot } from "../components/IfNot/IfNot";

export default function Home() {
  return (
    <main>
      <Hero />
      <Technique />
      <Reason />
      <Method />
      <Review />
      <Advantages />
      <Price />
      <IfNot />
    </main>
  );
}

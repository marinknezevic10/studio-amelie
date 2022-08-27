import styles from "./Contentcard.module.scss";
import Description from "./Description";
import Button from "./Button";
import Menu from "./Menu";
import Image from "next/image";
import { useRef } from "react";

export default function ContentCard() {
  const lazyRoot = useRef(null);

  return (
    <>
      <div ref={lazyRoot} className={styles.imgContainer}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.image}
            lazyRoot={lazyRoot}
            src="/Girl.png"
            width="500"
            height="500"
          />
        </div>
        <div className={styles.social}>Facebook</div>
      </div>

      <Description
        title="Jahre erfahrung in der nagelpflege "
        subtitle="Ein Schönheitssalon der eine breite Palette von Dienstleistungen anbietet"
      />
      <Button buttonTitle="EINSCHREIBEN" />
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <h1>100+</h1>
          <h3>Ein Schönheitssalon der eine breite</h3>
        </div>

        <div className={styles.firstContainer}>
          <h1>24</h1>
          <h3>Ein Schönheitssalon der eine breite</h3>
        </div>

        <div className={styles.firstContainer}>
          <h1>12</h1>
          <h3>Ein Schönheitssalon der eine breite</h3>
        </div>
      </div>
    </>
  );
}

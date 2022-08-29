import { useRef } from "react";
import styles from "./Main.module.scss";
import { Description, Button, TextContainer } from "../../components";
import Image from "next/image";
function MainPage() {
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
      <Button title="EINSCHREIBEN" />
      <div className={styles.descContainer}>
        <TextContainer title="Hello" subtitle="Ya Hello" />

        <TextContainer title="Hello" subtitle="Ya Hello" />

        <TextContainer title="Hello" subtitle="Ya Hello" />
      </div>
    </>
  );
}

export default MainPage;

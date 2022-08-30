import styles from "./Main.module.scss";

import Image from "next/image";
import Girl from "../../public/images/Girl.png";
import Nails from "../../public/images/Nails.png";
import Buildings from "../../public/images/Buildings.png";
import Arrow from "../../public/images/Arrow.png";
import {
  Button,
  TextContainer,
  Title,
  Subtitle,
  SmallerTitle,
  SmallerSubtitle,
} from "../../components";

function MainPage() {
  return (
    <>
      <div>
        <div className={styles.imgWrapper}>
          <Image className={styles.image} src={Girl} alt="/" />
          <div className={styles.social}>
            <a>Facebook</a>
            <a>Telegram</a>
            <a>Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.titleContainer}>
        <Title title="Jahre erfahrung in der nagelpflege " />
        <Subtitle subtitle="Ein Schönheitssalon der eine breite Palette von Dienstleistungen anbietet" />
        <Button buttonTitle="EINSCHREIBEN" />
      </div>
      <div className={styles.descContainer}>
        <TextContainer
          title="100+"
          subtitle="Ein Schönheitssalon der eine breite"
        />
        <div className={styles.secondContainer}>
          <TextContainer
            title="24"
            subtitle="Ein Schönheitssalon der eine breite"
          />
        </div>

        <TextContainer
          title="12"
          subtitle="Ein Schönheitssalon der eine breite"
        />
      </div>
      <SmallerTitle title="Das Studio Amelie ist eines der beliebtesten nagelstudios in Baden-Baden und umkreis" />
      <div className={styles.flexContainer}>
        <Image src={Nails} alt="/" />
        <Image src={Buildings} alt="/" />
        <div>
          <SmallerSubtitle
            subtitle="Im Studio Amelie Salon sind wir stolz auf die Qualität unserer Arbeit.Wir bieten unseren Kunden ein Höchstmaß an Professionalität und Hygiene, bieten den besten Service und halten unsere Preise angemessen.
          Wir können garantieren, dass die Dienstleistungen, die Sie im Studio Amelie Salon erhalten, die neuesten Technologien und Trends der Nagelindustrie verwenden."
          />
          <button type="button" className={styles.uber}>
            Uber uns <Image src={Arrow} alt="/" className={styles.arrow} />
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;

import styles from "./main.module.scss";

import Image from "next/image";
import Girl from "../../public/images/Girl.png";
import Facebook from "../../public/images/facebook.png";
import Telegram from "../../public/images/telegram.png";
import Instagram from "../../public/images/instagram.png";
import Nails from "../../public/images/Nails.png";
import Buildings from "../../public/images/Buildings.png";
import Arrow from "../../public/images/Arrow.png";
import Lime from "../../public/images/Lime.png";
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
      <section className={styles.homeIntro}>
        <section className={styles.homeIntroHero}>
          <div className={styles.topPosition}>
            <div className={styles.title}>
              <div>
                <h1>JAHRE ERIAHRUNG IN DER NAGELPFLEGE</h1>
                <h4>
                  Ein Schönheitssalon der eine breite Palette von
                  Dienstleistungen anbietet
                </h4>
              </div>
            </div>
            <button type="submit"> EINSCHREIBEN </button>

            <div className={styles.benefits}>
              <div className={styles.sectionDisplay}>
                <div>
                  <h1>100+</h1>
                  <h4>Ein Schönheitssalon der eine breite</h4>
                </div>
                <div>
                  <h1>24</h1>
                  <h4>Ein Schönheitssalon der eine breite</h4>
                </div>
                <div>
                  <h1>12</h1>
                  <h4>Ein Schönheitssalon der eine breite</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <Image
              src={Girl}
              alt="/"
              className={styles.img}
              width="500"
              height="500"
            />
            <div className={styles.socials}>
              <Image src={Facebook} alt="/" />

              <Image src={Telegram} alt="/" />

              <Image src={Instagram} alt="/" />
            </div>
          </div>
        </section>

        <section className={styles.homeIntroAbout}>
          <div className={styles.secondContent}>
            <div>
              <h1>
                Das Studio Amelie ist eines der beliebtesten nagelstudios in
                Baden-Baden und umkreis
              </h1>
            </div>
          </div>
          <div>
            <div className={styles.flexContainer}>
              <Image src={Nails} alt="/" />
              <Image src={Buildings} alt="/" />
              <div className={styles.Description}>
                <p>
                  Im Studio Amelie Salon sind wir stolz auf die Qualität unserer
                  Arbeit.Wir bieten unseren Kunden ein Höchstmaß an
                  Professionalität und Hygiene, bieten den besten Service und
                  halten unsere Preise angemessen. Wir können garantieren, dass
                  die Dienstleistungen, die Sie im Studio Amelie Salon erhalten,
                  die neuesten Technologien und Trends der Nagelindustrie
                  verwenden.
                </p>
                <button type="submit">
                  UBER UNS <Image src={Arrow} alt="/" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.homeAbout}>
        <div className="container">
          <h1>Schauen sie sich unsere fantastischen dienstleistungen an</h1>

          <div className={styles.homeAboutServices}>
            <div className={styles.homeAboutServicesCard}>
              <h5>Specials</h5>
              <h2>Gel auf naturgel</h2>
              <div className={styles.homeAboutServicesCardImage}>
                <Image src={Lime} alt="/" />
                <h5>MANIKURE + PEDIKURE +ENTFERNUNG + GEL-POLITUR</h5>

                <div className={styles.homeAboutServicesBorder} />
              </div>
            </div>
            <div className="homeAboutServicesCards">
              <div>kartica</div>
              <div>kartica</div>
            </div>
          </div>

          <div className="homeAboutCta">
            <h2>asdasdasdda</h2>
            <button type="button">alle deinste</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;

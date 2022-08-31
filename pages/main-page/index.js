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
import NailArt from "../../public/images/NailArt.png";
import Acryl from "../../public/images/Acryl.png";
import Nails1 from "../../public/images/Nails1.png";
import Nails2 from "../../public/images/Nails2.png";
import Nails3 from "../../public/images/Nails3.png";

import {
  Button,
  TextContainer,
  Title,
  Subtitle,
  SmallerTitle,
  SmallerSubtitle,
} from "../../components";
import classnames from "classnames";

function MainPage() {
  return (
    <>
      <section className={styles.homeIntro}>
        <div className="container">
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
                    Im Studio Amelie Salon sind wir stolz auf die Qualität
                    unserer Arbeit.Wir bieten unseren Kunden ein Höchstmaß an
                    Professionalität und Hygiene, bieten den besten Service und
                    halten unsere Preise angemessen. Wir können garantieren,
                    dass die Dienstleistungen, die Sie im Studio Amelie Salon
                    erhalten, die neuesten Technologien und Trends der
                    Nagelindustrie verwenden.
                  </p>
                  <button type="submit">
                    UBER UNS <Image src={Arrow} alt="/" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* home about  */}
      <section className={classnames(styles.homeAbout, "container")}>
        <h1>Schauen sie sich unsere fantastischen dienstleistungen an</h1>

        <div className={styles.homeAboutServices}>
          {/* home about first card */}

          <div className={styles.homeAboutServicesCard}>
            <h5>Specials</h5>
            <h2>Gel auf naturgel</h2>
            <div className={styles.homeAboutServicesCardImage}>
              <Image src={Lime} alt="/" />
              <h5>MANIKURE + PEDIKURE +ENTFERNUNG + GEL-POLITUR</h5>

              <div className={styles.homeAboutServicesBorder} />
              <h2>ab 50€</h2>
              <button type="submit" className={styles.cardButton}>
                EINSCHREIBEN
              </button>
            </div>
          </div>
          {/* home about first card */}

          {/* home about second cards */}
          <div className={styles.homeAboutServicesCards}>
            <div className={styles.homeAboutServicesTwoCards}>
              <div>
                <h5>Specials</h5>
                <h2>Nail art</h2>
                <Image src={NailArt} alt="/" />
                <h5>MANIKÜRE + PEDIKÜRE + ENTFERNUNG + GEL-POLITUR</h5>
                <div className={styles.homeAboutServicesBorderTwoCards} />
                <h2>ab 50€</h2>
                <button type="submit" className={styles.cardButton}>
                  EINSCHREIBEN
                </button>
              </div>
              <div>
                <h5>Specials</h5>
                <h2>Acryl</h2>
                <Image src={Acryl} alt="/" />
                <h5>MANIKÜRE + PEDIKÜRE + ENTFERNUNG + GEL-POLITUR</h5>
                <div className={styles.homeAboutServicesBorderTwoCards} />
                <h2>ab 50€</h2>
                <button type="submit" className={styles.cardButton}>
                  EINSCHREIBEN
                </button>
              </div>
            </div>
          </div>
          {/* home about second cards */}
        </div>

        <div className={styles.homeAboutCta}>
          <h2>Vollständige preisliste für unsere dienstleistungen </h2>
          <button type="button" className={styles.homeAboutButton}>
            alle deinste
          </button>
        </div>
      </section>
      {/* home about */}

      {/* home about us nails*/}
      <section className={classnames(styles.homeAboutNails, "container")}>
        <h2>Unsere mitarbeiter sind großartige profis </h2>
        <div className={styles.homeAboutNailsImages}>
          <Image src={Nails1} alt="/" />
          <Image src={Nails2} alt="/" />
          <Image src={Nails3} alt="/" />
        </div>
        <div className={styles.homeAboutNailsComments}>
          <h2>Wir lieben und schätzen unsere kunden sehr</h2>
          <button type="submit">
            Google-Bewertungen <Image src={Arrow} alt="/" />
          </button>
        </div>
        <div className={styles.row}>
          <div>
            <p>
              Einfach die Beste! Sehr zu empfehlen, super Arbeit und eine sehr
              liebe Seele. Gehe sehr gerne hin. Einfach die Beste! Sehr zu
              empfehlen, super Arbeit und eine sehr liebe Seele. Gehe sehr
              gerne.
            </p>
            <h5>Kunde</h5>
            <h3>Elly K.</h3>
          </div>
          <div>
            <p>
              Einfach die Beste! Sehr zu empfehlen, super Arbeit und eine sehr
              liebe Seele. Gehe sehr gerne hin. Einfach die Beste! Sehr zu
              empfehlen, super Arbeit und eine sehr liebe Seele. Gehe sehr
              gerne.
            </p>
            <h5>Kunde</h5>
            <h3>Elly K.</h3>
          </div>
          <div>
            <p>
              Einfach die Beste! Sehr zu empfehlen, super Arbeit und eine sehr
              liebe Seele. Gehe sehr gerne hin. Einfach die Beste! Sehr zu
              empfehlen, super Arbeit und eine sehr liebe Seele. Gehe sehr
              gerne.
            </p>
            <h5>Kunde</h5>
            <h3>Elly K.</h3>
          </div>
        </div>
      </section>
      {/* home about us nails */}
    </>
  );
}

export default MainPage;

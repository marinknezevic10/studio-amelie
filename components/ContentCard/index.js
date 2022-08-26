import styles from "./contentcard.module.scss";
import Description from "./Description";
import Button from "./Button";
import Menu from "./Menu";
export default function ContentCard() {
  return (
    <div>
      <Menu />

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
    </div>
  );
}

import styles from "./style.module.scss";

export default function Subtitle({ subtitle }) {
  return (
    <div className={styles.descriptioncontainer}>
      <p class={styles.description}>{subtitle}</p>
    </div>
  );
}

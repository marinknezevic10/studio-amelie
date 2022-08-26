import styles from "./title.module.scss";

export default function Description({ title, subtitle }) {
  return (
    <div>
      <div className={styles.headlinecontainer}>
        <h1 className={styles.headline}>{title}</h1>
      </div>
      <div className={styles.descriptioncontainer}>
        <p class={styles.description}>{subtitle}</p>
      </div>
    </div>
  );
}

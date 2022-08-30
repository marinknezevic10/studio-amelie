import styles from "./style.module.scss";

export default function Title({ title }) {
  return (
    <div className={styles.headlinecontainer}>
      <h1 className={styles.headline}>{title}</h1>
    </div>
  );
}

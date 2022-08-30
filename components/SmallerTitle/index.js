import styles from "./style.module.scss";

export default function SmallerTitle({ title }) {
  return (
    <div>
      <p className={styles.paragraph}>{title}</p>
    </div>
  );
}

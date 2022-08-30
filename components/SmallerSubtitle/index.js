import styles from "./style.module.scss";

export default function SmallerSubtitle({ subtitle }) {
  return (
    <div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

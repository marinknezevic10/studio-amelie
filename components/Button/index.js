import styles from "./style.module.scss";

export default function Button({ title }) {
  return (
    <div className={styles.ButtonContainer}>
      <button type="submit" className={styles.button}>
        {title}
      </button>
    </div>
  );
}

import styles from "./style.module.scss";

export default function Button({ buttonTitle }) {
  return (
    <div className={styles.ButtonContainer}>
      <button type="submit" className={styles.button}>
        {buttonTitle}
      </button>
    </div>
  );
}

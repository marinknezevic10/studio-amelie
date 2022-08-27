import styles from "./TextContainer.module.scss";

const TextContainer = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default TextContainer;

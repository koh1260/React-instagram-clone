import styles from "./OrLine.module.css";

function OrLine() {
  return (
    <div className={styles.or}>
      <span className={styles.line}></span>
      <span className={styles.or_text}>또는</span>
      <span className={styles.line}></span>
    </div>
  );
}
export default OrLine;
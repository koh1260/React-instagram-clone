import styles from "./Modal.module.css";

function Modal({ setOpenPosting, children }) {
  return (
    <div className={styles.modal}>
      {children}
      <button
        type="button"
        onClick={() => setOpenPosting(false)}
        className={styles.modal__exit}
      >
        X
      </button>
    </div>
  );
}
export default Modal;

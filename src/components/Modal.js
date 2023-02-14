import styles from "./Modal.module.css";

function Modal({ setOpenPosting, children }) {
  return (
    <div onClick={() => setOpenPosting(false)} className={styles.modal}>
      {children}
      <button type="button" className={styles.modal__exit}>
        X
      </button>
    </div>
  );
}
export default Modal;

import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import postSlice from "../../redux/slice/postSlice";

function Modal({ children }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal}>
      {children}
      <button
        type="button"
        onClick={() => dispatch(postSlice.actions.controlPostingModal())}
        className={styles.modal__exit}
      >
        X
      </button>
    </div>
  );
}
export default Modal;

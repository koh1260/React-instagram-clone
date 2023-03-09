import styles from "./Modal.module.css";
import { useRef } from "react";

function Modal({ children, openSet }) {
  const modalRef = useRef();
  console.log(openSet);

  // e.target은 부모에 감싸져 있더라도 클릭된 자신
  function modalOutSideClick(e){
    if(e.target === modalRef.current){
      openSet(false);
    }
  }

  return (
    <div 
      className={styles.modal}
      onClick={(e) => modalOutSideClick(e)}
      ref={modalRef}
      >
      {children}
      <button
        type="button"
        onClick={() => openSet(false)}
        className={styles.modal__exit}
      >
        X
      </button>
    </div>
  );
}
export default Modal;

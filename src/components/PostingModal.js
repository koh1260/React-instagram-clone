import styles from "./PostingModal.module.css";
import { ReactComponent as MediaIcon } from "../svg/svg-gobbler.svg";
import {useRef} from 'react';

function PostingModal() {
    const fileInput = useRef();
    function handleFileInput(event){
        fileInput.current.click();
    }

  return (
    <div className={styles.posting_modal}>
      <div className={styles.new_post_text_outer}>
        <span className={styles.new_post_text}>새 게시물 만들기</span>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.icon_outer}>
            <MediaIcon />
          </div>
          <div className={styles.drag_drop_text}>
            사진과 동영상을 여기에 끌어다 놓으세요
          </div>
        </div>
        <div>
          <button 
          className={styles.file_input_btn}
          onClick={(event) => handleFileInput(event)}>컴퓨터에서 선택</button>
          <input
            ref={fileInput}
            type="file"
            className={styles.file_select_btn}
          />
        </div>
      </div>
    </div>
  );
}
export default PostingModal;

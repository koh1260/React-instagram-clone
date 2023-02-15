import styles from "./PostingModal.module.css";
import { ReactComponent as MediaIcon } from "../svg/svg-gobbler.svg";
import { useRef, useState } from "react";
import axios from "axios";

function PostingModal() {
  const fileInput = useRef();
  function handleFileInput(event) {
    fileInput.current.click();
  }

  function imageUploadTest(e){
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append('postImage', file);
    console.log(file);
    axios.post('http://localhost:4000/post/image',formData).then((response) => console.log(response));
  }

  return (
    <div className={styles.posting_modal}>
      <div className={styles.new_post_text_outer}>
        <span className={styles.new_post_text}>새 게시물 만들기</span>
      </div>
      {/* contents */}
    <div className={styles.container_outer}>
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
          <form onSubmit={imageUploadTest}>
            <button>이미지 업로드</button>
            <button
            type="button"
              className={styles.file_input_btn}
              onClick={(event) => handleFileInput(event)}
            >
              컴퓨터에서 선택
            </button>
            <input
              ref={fileInput}
              type="file"
              name="postImage"
              onChange={(e) => imageUploadTest(e)}
              className={styles.file_select_btn}
            />
          </form>
        </div>
      </div>
      <div className={styles.contents_container}>
        {/* 프로필 ~ 이모지 */}
        <div>
            {/* 프로필 */}
            <div>
                <div>image</div>
                <div>id</div>
            </div>
            {/* 내용 */}
            <div>
                <textarea></textarea>
            </div>
            {/* 이모지 글자 수 */}
            <div>
                <div>icon</div>
                <div>count</div>
            </div>
        </div>
        {/* 위치 ~ 고급 */}
      </div>
    </div>
    </div>
  );
}
export default PostingModal;

import styles from "./PostingModal.module.css";
import { ReactComponent as MediaIcon } from "../svg/svg-gobbler.svg";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../api/auth";
import { ReactComponent as SmileIcon } from "../svg/svg-smile.svg";
import { ReactComponent as GioIcon } from "../svg/svg-gio.svg";
import { ReactComponent as Arrow } from "../svg/svg-arrow.svg";

function PostingModal() {
  const [user, setUser] = useState();
  const [textLength, setTextLength] = useState(0);

  const fileInput = useRef();
  function handleFileInput(event) {
    fileInput.current.click();
  }

  function imageUploadTest(e) {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("postImage", file);
    console.log(file);
    axios
      .post("http://localhost:4000/post/image", formData)
      .then((response) => console.log(response));
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await AuthService.loginedUser();
      const user = response.data;
      setUser(user);
      console.log(user);
    };
    getUser();
  }, []);

  return (
    <div>
      {user ? (
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
              <div className={styles.contents_container_inner}>
                {/* 프로필 */}
                <div className={styles.profile}>
                  <div>
                    <img
                      className={styles.profile__image}
                      src={user.profileImage}
                    />
                  </div>
                  <div>{user.nickname}</div>
                </div>
                {/* 내용 */}
                <div className={styles.textarea_outer}>
                  <textarea
                  onChange={(e) => setTextLength(e.target.value.length)}
                    placeholder="문구 입력..."
                    maxLength={2200}
                    className={styles.textarea}
                  ></textarea>
                </div>
                {/* 이모지 글자 수 */}
                <div className={styles.counter}>
                  <div>
                    <SmileIcon className={styles.smile_icon}/>
                  </div>
                  <div>{`${textLength}/2200`}</div>
                </div>
              </div>
              {/* 위치 ~ 고급 */}
              <div className={styles.util}>
                <div>
                    <input 
                    className={styles.location_input}
                        placeholder="위치 추가"/>
                </div>
                <div><GioIcon className={`${styles.icon} ${styles.location_icon}`}/></div>
              </div>
              <div className={styles.util}>
                <div>접근성</div>
                <div><Arrow className={styles.icon}/></div>
              </div>
              <div className={styles.util}>
                <div>고급 설정</div>
                <div><Arrow className={styles.icon}/></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default PostingModal;

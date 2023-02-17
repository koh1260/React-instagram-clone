import styles from "./PostingModal.module.css";
import { ReactComponent as MediaIcon } from "../svg/svg-gobbler.svg";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../api/auth";
import { ReactComponent as SmileIcon } from "../svg/svg-smile.svg";
import { ReactComponent as GioIcon } from "../svg/svg-gio.svg";
import { ReactComponent as Arrow } from "../svg/svg-arrow.svg";

function PostingModal({setOpenPosting}) {
  const [preview, setPreview] = useState();
  const [user, setUser] = useState();
  const [text, setText] = useState("");
  const formData = new FormData();
  const fileData = useRef();
  const navigate = useNavigate();

  const fileInput = useRef();
  function handleFileInput(event) {
    fileInput.current.click();
  }

  async function posting() {
    const data = {
      userId: user.userId,
      content: text,
    };
    formData.append("postImage", fileData.current);
    for (let key in data) {
      formData.append(key, data[key]);
    }
    const response = await axios.post('http://localhost:4000/post/posting', formData);
    console.log(response.status);
    if(response.status === 200) setOpenPosting(false);
  }

//   리렌더링되니까 file, formData는 계속 초기화된다.
  function imageUploadTest(e) {
    e.preventDefault();
    const file = e.target.files[0];
    fileData.current = file;
    const reader = new FileReader();
    console.log(fileData.current);

    reader.onloadend = (e) => {
      const url = reader.result;
      setPreview(
        <div className={styles.preview_image_outer}>
          <img className={styles.preview_image} src={url} />
        </div>
      );
    };
    if (file) reader.readAsDataURL(file);

    // console.log(file);
    // axios
    //   .post("http://localhost:4000/post/image", formData)
    //   .then((response) => console.log(response));
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await AuthService.loginedUser();
      const user = response.data;
      setUser(user);
      console.log(user);
    };
    getUser();
  }, [text]);

  return (
    <div className={styles.main}>
      {user ? (
        <div className={styles.posting_modal}>
          <div className={styles.new_post_text_outer}>
            <span className={styles.new_post_text_outer__back}></span>
            <span className={styles.new_post_text}>새 게시물 만들기</span>
            <span
              type="button"
              onClick={posting}
              className={styles.new_post_text_outer__share}
            >
              공유하기
            </span>
          </div>
          {/* formData가 비어 있으면 사진 선택 */}

          {/* contents */}
          <div className={styles.container_outer}>
            {preview ? (
              preview
            ) : (
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
                  <form>
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
            )}

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
                    onChange={(e) => setText(e.target.value)}
                    placeholder="문구 입력..."
                    maxLength={2200}
                    className={styles.textarea}
                  ></textarea>
                </div>
                {/* 이모티콘, 글자 수 */}
                <div className={styles.counter}>
                  <div>
                    <SmileIcon className={styles.smile_icon} />
                  </div>
                  <div>{`${text.length}/2200`}</div>
                </div>
              </div>
              {/* 위치 ~ 고급 */}
              <div className={styles.util}>
                <div>
                  <input
                    className={styles.location_input}
                    placeholder="위치 추가"
                  />
                </div>
                <div>
                  <GioIcon
                    className={`${styles.icon} ${styles.location_icon}`}
                  />
                </div>
              </div>
              <div className={styles.util}>
                <div>접근성</div>
                <div>
                  <Arrow className={styles.icon} />
                </div>
              </div>
              <div className={styles.util}>
                <div>고급 설정</div>
                <div>
                  <Arrow className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default PostingModal;

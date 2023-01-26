import styles from "./Login.module.css"
import { FaBeer } from "react-icons/fa";


function Login() {
  function onClick(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.login_body}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <h1>Instagram</h1>
        </div>

        {/* 로그인 ~ 비밀번호 찾기 */}
        <div className={styles.form_div}>
          <form
            className={styles.login_form}
            onSubmit={(event) => {
              event.preventDefault();
              console.log("submit");
            }}
          >
            <div className={styles.login}>
              <div>
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div>
                <input type="text" placeholder="비밀번호" />
              </div>
              <div className={styles.div_login}>
                <button className={styles.div_login_btn}>로그인</button>
              </div>
              <div>
                <h4>---------- 또는 ----------</h4>
              </div>
            </div>

            <div className={styles.facebook_login}>
              <span className={styles.facebook_login_btn}>
                Facebook으로 로그인
              </span>
            </div>
          </form>
        </div>
        <div className={styles.lose_password}>
          <a className={styles.lose_password_text} href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>

      {/* 가입하기 */}
      <div className={styles.sign_up}>
        <p className={styles.sign_up_text}>
          계정이 없으신가요?
          <a className={styles.sign_up_text_link} href="#"> 가입하기</a>
        </p>
      </div>

      {/* 앱 다운로드 */}
      <div>
        <div>
          <p>앱을 다운로드하세요.</p>
        </div>
        <div>
          <a href="#">App Store</a>
          <a href="#">Google Play</a>
        </div>
      </div>
    </div>
  );
}
export default Login;

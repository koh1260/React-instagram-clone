import { useState } from "react";
import styles from "./Login.module.css";
import { GrFacebook } from "react-icons/gr";
import instaLogo from "../img/instagram_icon.png";
import { Link } from "react-router-dom";
import LoginInput from "../components/atom/LoginInput";
import { loginAPI } from "../api/login";

function Login({ setSignUpPage }) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  function handleInputId(event) {
    setInputId(event.target.value);
    console.log("ID: ", event.target.value);
  }
  function handleInputPw(event) {
    setInputPw(event.target.value);
    console.log("PW: ", event.target.value);
  }
  function handleSignUpPage() {
    setSignUpPage(true);
  }
  function loginSubmit(event) {
    event.preventDefault();
    const data = {};
    data.email = inputId;
    data.password = inputPw;

    loginAPI("/login", data);
  }

  return (
    <div className={styles.login_body}>
      <div className={styles.main}>
        <div>
          <img className={styles.logo} src={instaLogo} />
        </div>

        {/* 로그인 ~ 비밀번호 찾기 */}
        <div className={styles.form_div}>
          <form
            className={styles.login_form}
            onSubmit={loginSubmit}
            // onSubmit={(event) => {
            //   event.preventDefault();
            //   console.log("submit");
            //   <Link to="/home" />;
            // }}
          >
            <div className={styles.login}>
              <div className={styles.input_outer}>
                <LoginInput
                  onChange={handleInputId}
                  placeholder={"전화번호, 사용자 이름 또는 이메일"}
                  value={inputId}
                />
              </div>
              <div className={styles.input_outer}>
                <LoginInput
                  onChange={handleInputPw}
                  placeholder={"비밀번호"}
                  value={inputPw}
                />
              </div>
              <div className={styles.div_login}>
                <button type="submit" className={styles.div_login_btn}>
                  로그인
                </button>
                {/* <Link to="/home">
                  <button className={styles.div_login_btn}>로그인</button>
                </Link> */}
              </div>
              <div className={styles.or}>
                <span className={styles.line}></span>
                <span className={styles.or_text}>또는</span>
                <span className={styles.line}></span>
              </div>
            </div>

            <div className={styles.facebook_login_par}>
              <div className={styles.facebook_login}>
                <button className={styles.facebook_login_btn}>
                  <span className={styles.facebook_login_logo}>
                    <GrFacebook className={styles.facebook_logo} size="15" />
                  </span>
                  <span className={styles.facebook_login_text}>
                    Facebook으로 로그인
                  </span>
                </button>
              </div>
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
          <button
            className={styles.sign_up_text_btn}
            onClick={handleSignUpPage}
          >
            가입하기
          </button>
        </p>
      </div>

      {/* 앱 다운로드 */}
      <div className={styles.app_download}>
        <div className={styles.app_download_text_div}>
          <span className={styles.app_download_text}>앱을 다운로드하세요.</span>
        </div>
        <div className={styles.store}>
          <a href="#">
            <img
              className={styles.appstore_icon}
              src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"
            />
          </a>
          <a href="#">
            <img
              className={styles.googleplay_icon}
              src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;

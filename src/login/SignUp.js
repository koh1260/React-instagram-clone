import { useState } from "react";
import styles from "./SignUp.module.css";
import { GrFacebook } from "react-icons/gr";
import instaLogo from "../img/instagram_icon.png";

function Login({ setSignUpPage }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [inputPw, setInputPw] = useState("");

  function handleInputEmail(event) {
    setInputEmail(event.target.value);
    console.log(`email: ${inputEmail}`);
  }
  function handleInputName(event) {
    setInputName(event.target.value);
    console.log(`name: ${inputName}`);
  }
  function handleInputNickname(event) {
    setInputNickname(event.target.value);
    console.log(`nickname: ${inputNickname}`);
  }
  function handleInputPw(event) {
    setInputPw(event.target.value);
    console.log(`pw: ${inputPw}`);
  }
  function handleSighUpPage() {
    setSignUpPage(false);
  }
  function signUpSubmit(event) {
    event.preventDefault();

    const data ={};
    data.email = inputEmail;
    data.name = inputName;
    data.nickname = inputNickname;
    data.password = inputPw;

    console.log(data);
    console.log(typeof data);

    const options = {
      method: "POST",
      headers: {
          "Content-Type" : 'application/json',
      },
      body: JSON.stringify(data)
    }

    fetch("/register", options)
  }

  return (
    <div className={styles.sign_up_body}>
      <div className={styles.main}>
        {/* instagram 로고 */}
        <div>
          <img className={styles.logo} src={instaLogo} />
        </div>

        <div className={styles.under_logo_text_outer}>
          <h3 className={styles.under_logo_text}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </h3>
        </div>
        {/* Facebook 로그인 */}
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

        {/* OR */}
        <div className={styles.or}>
          <span className={styles.line}></span>
          <span className={styles.or_text}>또는</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.form_div}>
          <form
            className={styles.sign_up_form}
            onSubmit={signUpSubmit}
          >
            <div className={styles.sign_up_form_inner}>
              <div>
                <input
                  className={styles.sign_up_input}
                  type="text"
                  onChange={handleInputEmail}
                  placeholder="휴대폰 번호 또는 이메일 주소"
                  value={inputEmail}
                />
              </div>
              <div>
                <input
                  className={styles.sign_up_input}
                  type="text"
                  onChange={handleInputName}
                  placeholder="성명"
                  value={inputName}
                />
              </div>
              <div>
                <input
                  className={styles.sign_up_input}
                  type="text"
                  onChange={handleInputNickname}
                  placeholder="사용자 이름"
                  value={inputNickname}
                />
              </div>
              <div>
                <input
                  className={styles.sign_up_input}
                  type="text"
                  onChange={handleInputPw}
                  placeholder="비밀번호"
                  value={inputPw}
                />
              </div>
              <div>
                <p className={styles.explain_text}>
                  저희 서비스를 이용하는 사람이 회원님의 연락처 정보를
                  Instagram에 업로드했을 수도 있습니다.
                </p>
              </div>
              <div className={styles.div_sign_up}>
                  <button 
                    type="submit"
                    className={styles.div_sign_up_btn}>가입</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 가입하기 */}
      <div className={styles.sign_up}>
        <p className={styles.sign_up_text}>
          계정이 있으신가요?
          <button
            className={styles.sign_up_text_btn}
            onClick={handleSighUpPage}
          >
            로그인
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

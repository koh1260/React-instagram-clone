import styles from "./Login.module.css";
import { GrFacebook } from "react-icons/gr";
import instaLogo from "../../../assets/img/instagram_icon.png";
import LoginForm from "../molecules/LoginForm";
import OrLine from "../../Home/atoms/OrLine";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login_body}>
      <div className={styles.main}>
        <div>
          <img className={styles.logo} src={instaLogo} />
        </div>

        {/* 로그인 ~ 비밀번호 찾기 */}
        <div className={styles.login_box_contents}>
          <LoginForm />
          <OrLine />
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
          <div className={styles.lose_password}>
            <a className={styles.lose_password_text} href="#">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>

      {/* 가입하기 */}
      <div className={styles.sign_up}>
        <p className={styles.sign_up_text}>
          계정이 없으신가요?
          <Link to={"/sign-up"}>
            <span
              className={styles.sign_up_text_btn}
            >
              가입하기
            </span>
          </Link>
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

import styles from "./SignUp.module.css";
import { GrFacebook } from "react-icons/gr";
import instaLogo from "../../../assets/img/instagram_icon.png";
import SignUpForm from "../molecules/SignUpForm";
import { Link } from "react-router-dom";

function SignUp() {
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
          <SignUpForm />
        </div>
      </div>

      {/* 가입하기 */}
      <div className={styles.sign_up}>
        <p className={styles.sign_up_text}>
          계정이 있으신가요?
          <Link to={'/'}>
            <span className={styles.sign_in_text_btn}>
              로그인
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
export default SignUp;

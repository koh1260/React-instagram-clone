import styles from "./Footer.module.css";

function Footer(){
    return (
      <div className={styles.footer_body}>
        <div className={styles.main}>
          <div className={styles.item}>
            <a>Meta</a>
          </div>
          <div className={styles.item}>
            <a>소개</a>
          </div>
          <div className={styles.item}>
            <a>블로그</a>
          </div>
          <div className={styles.item}>
            <a>채용 정보</a>
          </div>
          <div className={styles.item}>
            <a>도움말</a>
          </div>
          <div className={styles.item}>
            <a>API</a>
          </div>
          <div className={styles.item}>
            <a>개인정보처리방침</a>
          </div>
          <div className={styles.item}>
            <a>약관</a>
          </div>
          <div className={styles.item}>
            <a>인기 계정</a>
          </div>
          <div className={styles.item}>
            <a>위치</a>
          </div>
          <div className={styles.item}>
            <a>Instagram Lite</a>
          </div>
          <div className={styles.item}>
            <a>연락처 업로드 & 비사용자</a>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footer_in}>
          <div className={styles.footer_select}>
            <select>
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <span>@2023 Instagram from Meta</span>
          </div>
        </div>
          </div>
      </div>
    );
}
export default Footer;
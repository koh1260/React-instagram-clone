import styles from "./Footer.module.css";

function Footer(){
    return (
      <div>
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
        </div>

        <div className={styles.footer}>
          <div className={styles.footer_select}>
            <select>
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <p>@2023 Instagram from Meta</p>
          </div>
        </div>
      </div>
    );
}
export default Footer;
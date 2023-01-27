import Article from "../login/Article";
import Footer from "../login/Footer";
import styles from "./LoginPage.module.css"

function LoginPage(){
    return (
      <div className={styles.main}>
        <div className={styles.article}>
          <Article />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
}
export default LoginPage;
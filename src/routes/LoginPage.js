import Article from "../login/Article";
import Footer from "../login/Footer";
import styles from "./LoginPage.module.css"

function LoginPage(){
    return (
      <div className={styles.main}>
        <div className={styles.item1}>
          <Article />
        </div>
        <div className={styles.item2}>
          <Footer />
        </div>
      </div>
    );
}
export default LoginPage;
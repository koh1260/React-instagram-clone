import Login from "./Login";
import Animation from "./Animation";
import styles from "./Article.module.css"

function Article() {
  return (
    <div className={styles.article_body}>
        <div className={styles.main}>
      <div>
        <Animation />
      </div>
      <div>
        <Login />
      </div>
    </div>
    </div>
  );
}
export default Article;

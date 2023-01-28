import Login from "./Login";
import Animation from "./Animation";
import styles from "./Article.module.css"
import { useMediaQuery } from 'react-responsive'

function Article() {
    const responsivePage = useMediaQuery({query: '(min-width: 875px)'})

  return (
    <div className={styles.article_body}>
      <div className={styles.main}>
        {responsivePage && (
          <div>
            <Animation />
          </div>
        )}
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
export default Article;

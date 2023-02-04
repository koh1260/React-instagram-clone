import Login from "./Login";
import SignUp from "./SignUp";
import Animation from "./Animation";
import styles from "./Article.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Article() {
  const [signUpPage, setSignUpPage] = useState(false);

  const responsivePage = useMediaQuery({ query: "(min-width: 875px)" });

  return (
    <div className={styles.article_body}>
      <div className={styles.main}>
        {responsivePage && (
          <div>
            <Animation />
          </div>
        )}
        <div>
          {signUpPage ? (
            <SignUp setSignUpPage={setSignUpPage} />
          ) : (
            <Login setSignUpPage={setSignUpPage} />
          )}
        </div>
      </div>
    </div>
  );
}
export default Article;

import Footer from "../organisms/Footer";
import styles from "./LoginPage.module.css";
import Login from "../organisms/Login";
import SignUp from "../organisms/SignUp";
import Animation from "../atoms/Animation";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function LoginPage() {
  const responsivePage = useMediaQuery({ query: "(min-width: 875px)" });
  
  return (
    <div className={styles.main}>
      <div className={styles.article}>
        <div className={styles.article_body}>
          <div className={styles.main_a}>
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
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
export default LoginPage;

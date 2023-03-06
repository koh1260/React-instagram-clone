import styles from "./LoginForm.module.css";
import SignInUpInput from "../atoms/SignInUpInput";
import SignInUpButton from "../atoms/SignInUpButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../../../api/auth";
import loginSlice from "../../../redux/slice/loginSlice";
//placeholder, onChange, value
function LoginForm() {
  const navigate = useNavigate();
  const dipatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const sessionStorage = window.sessionStorage;

  async function loginSubmit(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await AuthService.login(userData);
    const status = response.status;

    if (status === 200) {
      console.log("response: ", response);
      sessionStorage.setItem("nickname", response.data.nickname);
      navigate("/home");
    } else {
      alert("로그인 실패");
    }
  }

  return (
    <div>
      <form className={styles.login_form} onSubmit={(e) => loginSubmit(e)}>
        <div className={styles.input_outer}>
          <SignInUpInput
            inputType={"text"}
            placeholder={"전화번호, 사용자 이름 또는 이메일"}
            onChange={(e) =>
              dipatch(loginSlice.actions.inputEmail({ email: e.target.value }))
            }
            value={email}
          />
        </div>
        <div className={styles.input_outer}>
          <SignInUpInput
            inputType={"password"}
            placeholder={"비밀번호"}
            onChange={(e) =>
              dipatch(
                loginSlice.actions.inputPassword({ password: e.target.value })
              )
            }
            value={password}
          />
        </div>
        <div className={styles.button_outer}>
          <SignInUpButton btnText={"로그인"} />
        </div>
      </form>
    </div>
  );
}
export default LoginForm;

import styles from "./LoginForm.module.css";
import SignInUpInput from "../atoms/SignInUpInput";
import SignInUpButton from "../atoms/SignInUpButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginSlice from "../../../redux/login/loginSlice";
//placeholder, onChange, value
function LoginForm({
  onSubmit,
  inputType01,
  inputType02,
  placeholder01,
  onChange01,
  value01,
  placeholder02,
  onChange02,
  value02,
  btnText,
}) {
  const navigate = useNavigate();
  const dipatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const myStorage = window.sessionStorage;

  function loginSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const config = {
      method: "post",
      url: "http://localhost:4000/auth/login",
      data: data,
      withCredentials: true,
    };

    axios(config)
      .then((response) => {
        if (response.status === 200) {
          console.log("session storege에 저장할 값: ", response.data.nickname);
          myStorage.setItem("nickname", response.data.nickname);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  }
  // dispatch를 하는데 하나만 하니까 다른 하나의 값은 undifined로 업데이트되는 거 같다.
  function handleInputEmail(e) {
    dipatch(
      loginSlice.actions.inputEmail({ email: e.target.value})
    );
  }
  function handleInputPassword(e) {
    dipatch(
      loginSlice.actions.inputPassword({ password: e.target.value })
    );
  }

  return (
    <div>
      <form className={styles.login_form} onSubmit={(e) => loginSubmit(e)}>
        <div className={styles.input_outer}>
          <SignInUpInput
            inputType={inputType01}
            placeholder={placeholder01}
            onChange={handleInputEmail}
            value={email}
          />
        </div>
        <div className={styles.input_outer}>
          <SignInUpInput
            inputType={inputType02}
            placeholder={placeholder02}
            onChange={handleInputPassword}
            value={password}
          />
        </div>
        <div className={styles.button_outer}>
          <SignInUpButton btnText={btnText} />
        </div>
      </form>
    </div>
  );
}
export default LoginForm;

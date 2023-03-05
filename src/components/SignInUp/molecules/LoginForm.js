import styles from "./LoginForm.module.css";
import SignInUpInput from "../atoms/SignInUpInput";
import SignInUpButton from "../atoms/SignInUpButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import AuthService from "../../../api/auth";
import loginSlice from "../../../redux/slice/loginSlice";
//placeholder, onChange, value
function LoginForm() {
=======
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
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)
  const navigate = useNavigate();
  const dipatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
<<<<<<< HEAD
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
=======
  const myStorage = window.sessionStorage;
  console.log("email: ", email);
  console.log("password: ", password);

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
      loginSlice.actions.login({ email: e.target.value, password: password })
    );
  }
  function handleInputPassword(e) {
    dipatch(
      loginSlice.actions.login({ email: email, password: e.target.value })
    );
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)
  }

  return (
    <div>
      <form className={styles.login_form} onSubmit={(e) => loginSubmit(e)}>
        <div className={styles.input_outer}>
          <SignInUpInput
<<<<<<< HEAD
            inputType={"text"}
            placeholder={"전화번호, 사용자 이름 또는 이메일"}
            onChange={(e) =>
              dipatch(loginSlice.actions.inputEmail({ email: e.target.value }))
            }
=======
            inputType={inputType01}
            placeholder={placeholder01}
            onChange={handleInputEmail}
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)
            value={email}
          />
        </div>
        <div className={styles.input_outer}>
          <SignInUpInput
<<<<<<< HEAD
            inputType={"password"}
            placeholder={"비밀번호"}
            onChange={(e) =>
              dipatch(
                loginSlice.actions.inputPassword({ password: e.target.value })
              )
            }
=======
            inputType={inputType02}
            placeholder={placeholder02}
            onChange={handleInputPassword}
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)
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

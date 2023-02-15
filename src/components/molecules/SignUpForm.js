import { useState } from "react";
import styles from "./SignUpForm.module.css";
import SignInUpButton from "../atoms/SignInUpButton";
import SignInUpInput from "../atoms/SignInUpInput";
import axios from "axios";

function SignUpForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [inputPw, setInputPw] = useState("");

  function handleInputEmail(event) {
    setInputEmail(event.target.value);
  }
  function handleInputName(event) {
    setInputName(event.target.value);
  }
  function handleInputNickname(event) {
    setInputNickname(event.target.value);
  }
  function handleInputPw(event) {
    setInputPw(event.target.value);
  }
  // function handleSighUpPage() {
  //   setSignUpPage(false);
  // }
  async function signUpSubmit(event) {
    event.preventDefault();

    if (
      (inputEmail.length &&
      inputName.length &&
      inputNickname.length &&
      inputPw.length) === 0
    ) {
      alert("정보 입력해");
      return;
    }
    console.log(inputEmail && inputName && inputNickname && inputPw);

    const data = {
      email: inputEmail,
      name: inputName,
      nickname: inputNickname,
      password: inputPw,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/sign-up",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    setInputEmail("");
    setInputName("");
    setInputNickname("");
    setInputPw("");
  }

  return (
    <div>
      <form className={styles.sign_up_form} onSubmit={signUpSubmit}>
        <div className={styles.sign_up_form_inner}>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"휴대폰 번호 또는 이메일 주소"}
              onChange={handleInputEmail}
              value={inputEmail}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"성명"}
              onChange={handleInputName}
              value={inputName}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"사용자 이름"}
              onChange={handleInputNickname}
              value={inputNickname}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              inputType={'password'}
              placeholder={"비밀번호"}
              onChange={handleInputPw}
              value={inputPw}
            />
          </div>
          <div>
            <p className={styles.explain_text}>
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다.
            </p>
          </div>
          <SignInUpButton btnText={"가입"} />
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

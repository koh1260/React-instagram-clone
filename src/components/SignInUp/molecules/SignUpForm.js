import { useState } from "react";
import styles from "./SignUpForm.module.css";
import SignInUpButton from "../atoms/SignInUpButton";
import SignInUpInput from "../atoms/SignInUpInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import signUpSlice from "../../../redux/slice/signUpSlice";
import AuthService from '../../../api/auth';

function SignUpForm() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.signUp.email);
  const name = useSelector((state) => state.signUp.name);
  const nickname = useSelector((state) => state.signUp.nickname);
  const password = useSelector((state) => state.signUp.password);

  async function signUpSubmit(e) {
    e.preventDefault();
    console.log('subimt');
    if ((email.length && name.length && nickname.length && password.length) === 0) {
      alert("정보 입력해");
      return;
    }
    const newUserData = {
      email: email,
      name: name,
      nickname: nickname,
      password: password,
    };

    const response = await AuthService.signUp(newUserData);
    console.log(response);
   
    dispatch(signUpSlice.actions.clear());
  }

  return (
    <div>
      <form className={styles.sign_up_form} onSubmit={(e) => signUpSubmit(e)}>
        <div className={styles.sign_up_form_inner}>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"휴대폰 번호 또는 이메일 주소"}
              onChange={(e) => dispatch(signUpSlice.actions.inputEmail({email:e.target.value}))}
              value={email}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"성명"}
              onChange={(e) => dispatch(signUpSlice.actions.inputName({name:e.target.value}))}
              value={name}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              placeholder={"사용자 이름"}
              onChange={(e) => dispatch(signUpSlice.actions.inputNickname({nickname:e.target.value}))}
              value={nickname}
            />
          </div>
          <div className={styles.input_outer}>
            <SignInUpInput
              inputType={"password"}
              placeholder={"비밀번호"}
              onChange={(e) => dispatch(signUpSlice.actions.inputpassword({password:e.target.value}))}
              value={password}
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

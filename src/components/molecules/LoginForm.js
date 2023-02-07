import styles from "./LoginForm.module.css";
import SignInUpInput from "../atoms/SignInUpInput";
import SignInUpButton from "../atoms/SignInUpButton";
//placeholder, onChange, value
function LoginForm({
  onSubmit,
  placeholder01,
  onChange01,
  value01,
  placeholder02,
  onChange02,
  value02,
  btnText,
}) {
  return (
    <div>
      <form 
        className={styles.login_form}
        onSubmit={onSubmit}>
        <div className={styles.input_outer}>
          <SignInUpInput
            placeholder={placeholder01}
            onChange={onChange01}
            value={value01}
          />
        </div>
        <div className={styles.input_outer}>
          <SignInUpInput
            placeholder={placeholder02}
            onChange={onChange02}
            value={value02}
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

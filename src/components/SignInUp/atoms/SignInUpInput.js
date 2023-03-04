import styles from './SignInUpInput.module.css';

function SignInUpInput({placeholder, onChange, value, inputType}){
    return (
        <div>
            <input className={styles.login_input}
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            />
        </div>
    )
}
export default SignInUpInput;
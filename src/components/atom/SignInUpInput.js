import styles from './SignInUpInput.module.css';

function SignInUpInput({placeholder, onChange, value}){
    return (
        <div>
            <input className={styles.login_input}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            />
        </div>
    )
}
export default SignInUpInput;
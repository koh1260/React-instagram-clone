import styles from './LoginInput.module.css';

function LoginInput({placeholder, onChange, value}){
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
export default LoginInput;
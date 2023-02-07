import styles from "./SignInUpButton.module.css";

function SignInUpButton({btnText}){
    return (
        <div>
            <button
                type="submit"
                className={styles.button}
            >
                {btnText}
            </button>
        </div>
    )
}
export default SignInUpButton;
import styles from "./Post.module.css";
import Story from "./Story";

function Post(){
    const userList = [
        {
            id: "koh1260",
        },
        {
            id: "a001206",
        },
        {
            id: "lucifer_5050",
        },
        {
            id: "usung_0421",
        },
        {
            id: "doori",
        },
        {
            id: "qwerty",
        },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.storys}>
                <div className={styles.story_list_outer}>
                    <ul className={styles.story_list}>
                        {userList.map(user => <Story userId={user.id} />)}
                    </ul>
                </div>
            </div>
        </div>
    )   
}
export default Post;
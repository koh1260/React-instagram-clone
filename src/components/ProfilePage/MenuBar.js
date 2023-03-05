import styles from './MenuBar.module.css';
import { ReactComponent as Grid } from '../../assets/svg/svg-grid.svg';
import { ReactComponent as Save } from '../../assets/svg/svg-save.svg';
import { ReactComponent as Tag} from '../../assets/svg/svg-tag.svg';

export default function MenuBar(){
    return (
        <div className={styles.main}>
            <div className={`${styles.menu} ${styles.active}`}>
                <Grid className={styles.menu_icon}/>
                <div>
                    게시물
                </div>
            </div>
            <div className={styles.menu}>
                <Save className={styles.menu_icon}/>
                <div>
                    저장됨
                </div>
            </div>
            <div className={styles.menu}>
                <Tag className={styles.menu_icon}/>
                <div>
                    태그됨
                </div>
            </div>
        </div>
    )
}
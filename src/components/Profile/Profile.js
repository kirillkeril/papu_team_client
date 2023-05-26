import styles from './profile.module.css';
import {Input} from "../UIKit/Input/Input";
export const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.profile}>
                    <div className={styles.profileContainer} >
                        <div className={styles.profileName}>Name</div>
                        <div className={styles.profileForm}>
                            <Input name={'name'}/>
                            <Input name={'surname'}/>
                            <Input name={'otchestvo'}/>
                            <Input name={'email'}/>
                            <Input name={'newPassword'}/>
                        </div>
                        <footer className={styles.profileFooter}>
                            <button>Прменить</button>
                            <button>Выйти</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div className={styles.productsContainer}>
                <div className={styles.productsContainer}>

                </div>
            </div>
        </div>
    );
}
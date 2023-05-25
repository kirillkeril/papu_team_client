import styles from './header.module.css';
import {Button} from "../UIKit/Button/Button";
import {Image} from "../UIKit/Image/Image";
export const Header = () => {
    return (
        <header className={styles.mainContainer}>
            <Image width={'250px'} src={'./source/logo.svg'} />
            <menu className={styles.menuContainer}>
                <div className={styles.menuItem}>О ферме</div>
                <div className={styles.menuItem}>Аналитика</div>
                <div className={styles.menuItem}>Сбор урожая</div>
                <div className={styles.menuItem}>Рекомендации</div>
                <div className={styles.menuItem}>Контакты</div>
            </menu>
            <div className={styles.buttonsContainer}>
                <Button>BUTTON</Button>
            </div>
        </header>
    );
}
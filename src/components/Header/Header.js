import styles from './header.module.css';
import {Button} from "../UIKit/Button/Button";
import {Image} from "../UIKit/Image/Image";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../index";
import {Input} from "../UIKit/Input/Input";
export const Header = () => {
    const navigate = useNavigate();
    const {state} = useContext(Context);
    return (
        <header className={styles.mainContainer}>
            <Image width={'250px'} src={'./source/logo.svg'} />
            <Input name={'search'} placeholder={'Найти среди 1000 товаров'} style={{width: '400px', marginLeft: '-130px'}}/>
            <menu className={styles.menuContainer}>
                <div className={styles.menuItem}>Фермерам</div>
                <div className={styles.menuItem}>Доставка</div>
                <div className={styles.menuItem}>Контакты</div>
            </menu>
            <div className={styles.buttonsContainer}>
                <Button onClick={() => navigate('/login')}>Вход/Регистрация</Button>
                <Button style={{padding: '10px'}}>
                    <Image src={'./source/basket.svg'} width={'28px'}/>
                </Button>
                <Button type={'light'} style={{padding: '10px'}}>
                    <Image src={'./source/heart.svg'} width={'28px'}/>
                </Button>
            </div>
        </header>
    );
}
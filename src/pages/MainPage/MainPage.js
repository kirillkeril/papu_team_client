import styles from './landing.module.css';
import {Header} from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import Store from "../../store/store";
export const MainPage = () => {
    const store = useContext(Store);
    return (
        <div className={styles.page}>
            <Header/>
            <main>

            </main>
        </div>
    );
}
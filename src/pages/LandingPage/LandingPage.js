import styles from './landing.module.css';
import {Header} from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
export const LandingPage = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <main>

            </main>
        </div>
    );
}
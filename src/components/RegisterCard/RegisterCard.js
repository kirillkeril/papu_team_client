import {Image} from "../UIKit/Image/Image";
import styles from './registerCard.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import UserService from "../../services/user.service";
import {Input} from "../UIKit/Input/Input";

export const RegisterCard = (params) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function register(e) {
        e.preventDefault();
        try {
            const res = await UserService.register(email, password);
            store.setUser(res.data.user);
            console.log(store.user)
        } catch (e) {
            console.log(e);
        }
    }
    async function login(e) {
        e.preventDefault();
        try {
            const res = await UserService.login(email, password);
            store.setUser(res.data.user);
            console.log(store.user)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className={styles.registerCard}>
            <Image width={'250px'} src={'/source/logo.svg'}/>
            <div className={styles.formContainer}>
                <span className={styles.span}>Войдите в аккаунт</span>
                <form className={styles.registerForm}>
                    <Input name={'email'} type={'email'} value={email} onChange={handleEmail}/>
                    <Input name={'password'} type={'password'} value={password} onChange={handlePassword}/>
                    <button onClick={login}>login</button>
                </form>
            </div>
            <footer>
            </footer>
        </div>
    );
}
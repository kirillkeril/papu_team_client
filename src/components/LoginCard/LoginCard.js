import { Image } from "../UIKit/Image/Image";
import styles from "./loginCard.module.css";
import { useContext, useState } from "react";
import { Context } from "../../index";
import UserService from "../../services/user.service";
import { Input } from "../UIKit/Input/Input";
import { Button } from "../UIKit/Button/Button";

export const LoginCard = (params) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [passwordAffirm, setPasswordAffrm] = useState("");
  const { store } = useContext(Context);
  const [isAuth, setAuth] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleuserName(e) {
    setuserName(e.target.value);
  }
  function handlePassworAffirm(e) {
    setPasswordAffrm(e.target.value);
  }

  async function register(e) {
    e.preventDefault();
    try {
      const res = await UserService.register(email, password);
      store.setUser(res.data.user);
      console.log(store.user);
    } catch (e) {
      console.log(e);
    }
  }
  async function login(e) {
    e.preventDefault();
    try {
      const res = await UserService.login(email, password);
      store.setUser(res.data.user);
      console.log(store.user);
    } catch (e) {
      console.log(e);
    }
  }
  if (isAuth) {
    return (
      <div className={styles.registerCard}>
        <Image width={"250px"} src={"/source/logo.svg"} />

        <div className={styles.formContainer}>
          <span className={styles.span}>Войдите в аккаунт</span>
          <form className={styles.registerForm}>
            <Input
              style={{ marginBottom: "44px" }}
              name={"email"}
              type={"email"}
              value={email}
              onChange={handleEmail}
            />
            <Input
              name={"password"}
              type={"password"}
              value={password}
              onChange={handlePassword}
            />
            <Button onClick={login}>login</Button>
          </form>
        </div>

        <footer></footer>
      </div>
    );
  } else {
    return (
      <div className={styles.registerCard}>
        <Image width={"250px"} src={"/source/logo.svg"} />

        <div className={styles.formContainer}>
          <span className={styles.span}>Войдите в аккаунт</span>
          <form className={styles.registerForm}>
            <Input
              style={{ marginBottom: "24px" }}
              name={"userName"}
              type={"userName"}
              value={userName}
              onChange={handleuserName}
              placeholder={"Как вас зовут?"}
            />
            <Input
              style={{ marginBottom: "24px" }}
              name={"email"}
              type={"email"}
              value={email}
              onChange={handleEmail}
              placeholder={"Электронная почта"}
            />
            <Input
              style={{ marginBottom: "24px" }}
              name={"password"}
              type={"password"}
              value={password}
              onChange={handlePassword}
              placeholder={"Пароль"}
            />
            <Input
              name={"password"}
              type={"password"}
              value={passwordAffirm}
              onChange={handlePassword}
              placeholder={"Повторите пароль"}
            />
            <Button onClick={register}>Регистрация</Button>
          </form>
        </div>

        <footer></footer>
      </div>
    );
  }
};

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
  const [userName, setUserName] = useState("");
  const [passwordAffirm, setPasswordAffrm] = useState("");
  const { store } = useContext(Context);
  const [isAuth, setAuth] = useState(true);
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  async function register(e) {
    e.preventDefault();
    try {
      if (validName(userName) && ValidMail(email) && comparePass(password, passwordAffirm)) {
        console.log(1)
        const res = await UserService.register(email, password);
        store.setUser(res.data.user);
        console.log(store.user);
      }
    } catch (e) {
      console.log(e);
    }
  }
  //Валидация мэйла
  function ValidMail(email) {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(email);
    return valid;
  }

  //Валидация имени
  function validName(name) {
    var re = /^[A-ZА-ЯЁ]+$/i;
    var valid = re.test(name);
    return valid;
  }

  //Сравнение паролей
  function comparePass(password, passAffirm) {
    if (password === passAffirm) {
      if (password !== "") return true;
    } else {
      return false;
    }
  }

  function changeAuth(bool) {
    setAuth(bool);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handlePasswordAffirm(e) {
    setPasswordAffrm(e.target.value);
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
              placeholder={"Электронная почта"}
              style={{ marginBottom: "24px" }}
              name={"email"}
              type={"email"}
              value={email}
              onChange={handleEmail}
            />
            <Input
              placeholder={"Пароль"}
              name={"password"}
              type={"password"}
              value={password}
              onChange={handlePassword}
            />
          </form>
          <Button onClick={login}>login</Button>
        </div>

        <footer className={styles.footer}>
          <span>
            Нет аккаунта?{" "}
            <span
              className={styles.registerLink}
              onClick={() => changeAuth(false)}
            >
              Загеристрируйтесь
            </span>
          </span>
        </footer>
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
              onChange={handleUserName}
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
              onChange={handlePasswordAffirm}
              placeholder={"Повторите пароль"}
            />
          </form>
          <Button onClick={register}>Регистрация</Button>
          <span className={styles.agreement}>
            Регистрируясь, вы соглашаетесь на обработку персональных данных
          </span>
        </div>

        <footer style={{ marginTop: "33px" }} className={styles.footer}>
          <p>
            Уже есть аккаунт?{' '}
            <label
              className={styles.registerLink}
              onClick={() => changeAuth(true)}
            >
              Войти
            </label>
          </p>
        </footer>
      </div>
    );
  }
};

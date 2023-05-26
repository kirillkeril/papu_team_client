import { Image } from "../UIKit/Image/Image";
import styles from "./loginCard.module.css";
import { useContext, useRef, useState } from "react";
import { Context } from "../../index";
import UserService from "../../services/user.service";
import { Input } from "../UIKit/Input/Input";
import { Button } from "../UIKit/Button/Button";
import { useNavigate } from "react-router-dom";

export const LoginCard = (params) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordAffirm, setPasswordAffrm] = useState("");
  const { store } = useContext(Context);
  const [isAuth, setAuth] = useState(true);
  const nameInp = useRef();

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
      console.log(store.user);
    } catch (e) {
      console.log(e);
    }
  }

  //Валидация мэйла
  function validMail(email) {
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
  function validPass(password, passAffirm) {
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
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const res = await UserService.login(email, password);
      store.setUser(res.data.user);
      console.log(store.user);
      navigate("/");
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
              // width={"350px"}
              placeholder={"Электронная почта"}
              style={{ marginBottom: "24px", width: "350px" }}
              name={"email"}
              id={"email"}
              type={"email"}
              value={email}
              onChange={handleEmail}
            />
            <Input
              style={{ width: "350px" }}
              placeholder={"Пароль"}
              name={"password"}
              id={"password"}
              type={"password"}
              value={password}
              onChange={handlePassword}
            />
          </form>
          <Button onClick={login}>Войти</Button>
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
        <Image style={{ width: "250px" }} src={"/source/logo.svg"} />

        <div className={styles.formContainer}>
          <span className={styles.span}>Войдите в аккаунт</span>
          <form className={styles.registerForm}>
            <Input
              ref={nameInp}
              style={{ marginBottom: "24px", width: "350px" }}
              name={"userName"}
              id={"userName"}
              value={userName}
              onChange={(e) => {
                handleUserName(e);
                const isValid = validName(e.target.value);
                if (isValid) {
                  e.target.classList.remove("setRed");
                } else {
                  e.target.classList.add("setRed");
                }
              }}
              placeholder={"Как вас зовут?"}
            />
            <Input
              style={{ marginBottom: "24px", width: "350px" }}
              name={"email"}
              type={"email"}
              id={"email"}
              value={email}
              onChange={(e) => {
                handleEmail(e);
                const isValid = validMail(e.target.value);
                if (isValid) {
                  e.target.classList.remove("setRed");
                } else {
                  e.target.classList.add("setRed");
                }
              }}
              placeholder={"Электронная почта"}
            />
            <Input
              style={{ marginBottom: "24px", width: "350px" }}
              name={"password"}
              id={"password"}
              type={"password"}
              value={password}
              onChange={(e) => {
                handlePassword(e);
              }}
              placeholder={"Пароль"}
            />
            <Input
              style={{ width: "350px" }}
              name={"password"}
              type={"password"}
              id={"password"}
              width={"350px"}
              value={passwordAffirm}
              onChange={(e) => {
                handlePasswordAffirm(e);
                const isValid = validPass(password, e.target.value);
                console.log(e.target.value, password);
                if (isValid) {
                  e.target.classList.remove("setRed");
                } else {
                  e.target.classList.add("setRed");
                }
              }}
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
            Уже есть аккаунт?{" "}
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

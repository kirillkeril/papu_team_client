import styles from "./landing.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
import backery from "../../img/backery.png";
import grocery from "../../img/grocery.png";
import meet from "../../img/meet.png";
import milk from "../../img/milk.png";
import sweets from "../../img/sweets.png";
import vegetables from "../../img/vegetables.png";
import { Button } from "../../components/UIKit/Button/Button";

export const MainPage = () => {
  const store = useContext(Store);
  const navigate = useNavigate();

  const photo = [<img src="../../img/meet.png" />, <img src={milk} />];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainBlock}>
        <div className={styles.banner}>
          <div>
            <Image
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              width={"100%"}
              src={"/source/banner.svg"}
            />
          </div>
        </div>

        <div className={styles.ourProductDiv}>
          <div className={styles.headText}>
            НАШИ ТОВАРЫ
            <Button onClick={() => navigate("/")} id={"catalog"}>
              В каталог
            </Button>
          </div>
          <div className={styles.productList}>
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={meet}
              width={"252px"}
            />
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={milk}
              width={"252px"}
            />
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={vegetables}
              width={"252px"}
            />
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={grocery}
              width={"252px"}
            />
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={sweets}
              width={"252px"}
            />
            <Image
              onClick={() => {
                navigate("/");
              }}
              src={backery}
              width={"252px"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

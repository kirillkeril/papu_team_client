import styles from "./landing.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../../store/store";
import bannerImg from "../../../public/bannerImg.svg";

export const MainPage = () => {
  const store = useContext(Store);
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div
          className={styles.bannerJPG}
          style={{
            backgroundImage: "url(./source/bannerImg.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </main>
    </div>
  );
};

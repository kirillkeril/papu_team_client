import styles from "./landing.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
export const MainPage = () => {
  const store = useContext(Store);
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.divBannerMain}>
          <div className={styles.divBannerChild}>
            <Image src={"/source/bannerImg.svg"} />
          </div>
        </div>
        
      </main>
    </div>
  );
};

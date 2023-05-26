import styles from "./landing.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
import {Footer} from "../../components/footer/Footer";
export const MainPage = () => {
  const store = useContext(Store);
  return (
    <div className={styles.page}>
      <Header />
      {/*<main className={styles.mainBlock}>*/}
      {/*  <div className={styles.banner}>*/}
      {/*    <div*/}
      {/*      style={{*/}
      {/*        position: "absolute",*/}
      {/*        top: 0,*/}
      {/*        left: 0,*/}
      {/*        right: 0,*/}
      {/*        bottom: 0,*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        style={{*/}
      {/*          position: "absolute",*/}
      {/*          top: 0,*/}
      {/*          left: 0,*/}
      {/*          right: 0,*/}
      {/*          bottom: 0,*/}
      {/*        }}*/}
      {/*        width={"100%"}*/}
      {/*        src={"/source/banner.svg"}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</main>*/}
        <Footer/>
    </div>
  );
};

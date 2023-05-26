import {Profile} from "../../components/Profile/Profile";
import styles from './profilepage.module.css';
import {Footer} from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
export const ProfilePage = () => {
  return (
      <div className={styles.page}>
          <Header/>
          <Profile/>
          <Footer/>
      </div>
  );
}
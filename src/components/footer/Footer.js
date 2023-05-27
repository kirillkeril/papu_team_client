import { Image } from "../UIKit/Image/Image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Image src={"./source/logo.svg"} width={"100%"} />
          <p>Мы в соц. сетях</p>
          <nav className={styles.links}>
            <div>вк</div>
            <div>телега</div>
          </nav>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Каталог</span>
          <span className={styles.spanList}>Мясо и птица</span>
          <span>Молочные изделия</span>
          <span>Овощи и фрукты</span>
          <span>Бакалея</span>
          <span>Сладости</span>
          <span>Выпечка</span>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Навигация</span>
          <span>Главная</span>
          <span>Каталог</span>
          <span>Продуктовая корзина</span>
          <span>О нас</span>
          <span>Бонусная программа</span>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Для клиентов</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
        </div>
        <div className={styles.column}>
          <span>Email</span>
          <span>Catalog</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>пролитика конф</div>
      </div>
    </footer>
  );
};

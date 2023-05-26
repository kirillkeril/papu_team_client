import styles from "./UrProducts.module.css";
import { ProductForm } from "../ProductForm/ProductForm";
import { ProductCard } from "../ProductCard/ProductCard";

export const UrProducts = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.textDiv}>ВАШИ ТОВАРЫ</div>
      <div className={styles.delay}>
        {/*<div className={styles.forAllCards}>*/}
          <ProductForm />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      {/*</div>*/}
    </div>
  );
};

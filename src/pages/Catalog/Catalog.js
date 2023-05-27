import styles from "./Catalog.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/UIKit/Button/Button";
import { FermerCard } from "../../components/fermerCard/fermerCard";
import Header from "../../components/Header/Header";

export const Catalog = () => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
          <div className={styles.mainDiv}>
            <div className={styles.leftDiv}>
              <div className={styles.switcherDiv}></div>
              <div className={styles.textCatalog}></div>
              <div className={styles.divFilters}>
                <div className={styles.textFilters}></div>
                <div className={styles.filterCategories}>
                  <label>
                    <input
                      id="meet"
                      type="checkbox"
                      placeholder="Мясо и птица"
                    />
                  </label>
                  <label>
                    <input
                      id="milk"
                      type="checkbox"
                      placeholder="Молочные изделия"
                    />
                  </label>
                  <label>
                    <input
                      id="veget"
                      type="checkbox"
                      placeholder="Овощи и фрукты"
                    />
                  </label>
                  <label>
                    <input id="grocery" type="checkbox" placeholder="Бакалея" />
                  </label>
                  <label>
                    <input id="sweets" type="checkbox" placeholder="Сладости" />
                  </label>
                  <label>
                    <input id="bakery" type="checkbox" placeholder="Выпечка" />
                  </label>
                </div>
                <div className={styles.filterPrice}>
                  <div className={styles.priceFrom}></div>
                  <div className={styles.priceTo}></div>
                </div>
                <div className={styles.filterFarmer}>
                  <label htmlFor="farmer1">
                    <input
                      id="farmer1"
                      type="checkbox"
                      placeholder="От 0 руб."
                    />
                    Виктор Корнеплодов
                  </label>
                  <label htmlFor="farmer2">
                    <input id="farmer2" type="checkbox" placeholder="Бакалея" />
                    Раиса Вездехлюпова
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.catalog}></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

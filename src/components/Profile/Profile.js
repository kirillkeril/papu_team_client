import styles from './profile.module.css';
import {Input} from "../UIKit/Input/Input";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {UrProducts} from "../UrProducts/UrProducts";
import {observer} from "mobx-react-lite";
import ProductService from "../../services/product.service";
const Profile = () => {
    const {store} = useContext(Context);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProd = async () => {
            const p = await ProductService.getAll();
            setProducts(p);
        }
        getProd();
    }, [products.length]);

    if(store.isAuth) return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutText}>ОБ АККАУНТЕ</h2>
                <div className={styles.profile}>
                    <div className={styles.profileContainer} >
                        <div className={styles.profileName}>{store.user.email}</div>
                        <div className={styles.profileForm}>
                            <Input style={{width:'464px'}} name={'name'}/>
                            <Input style={{width:'464px'}} name={'surname'}/>
                            <Input style={{width:'464px'}} name={'otchestvo'}/>
                            <Input style={{width:'464px'}} name={'email'}/>
                            <Input style={{width:'464px'}} name={'newPassword'}/>
                        </div>
                        <footer className={styles.profileFooter}>
                            <span className={styles.action}>Применить</span>
                            <span className={styles.action}>Выйти</span>
                        </footer>
                    </div>
                </div>
            </div>

            <div className={styles.productsContainer}>
                {products.length > 0 && <UrProducts products={products}/>}
            </div>
        </div>
    );
}

export default observer(Profile);
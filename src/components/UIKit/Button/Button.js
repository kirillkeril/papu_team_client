import styles from './button.module.css';
export const Button = (params) => {
    return (
        <div className={styles.button} role={"button"} {...params}>{params.children}</div>
    );
}
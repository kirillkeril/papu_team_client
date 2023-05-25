import styles from './button.module.css';
export const Button = ({children, onClick}) => {
    return (
        <div className={styles.button} role={"button"}>{children}</div>
    );
}
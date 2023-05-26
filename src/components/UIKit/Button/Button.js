import styles from './button.module.css';
export const Button = (params) => {
    let className = styles.button;
    if (params.type === 'light') {
        className += styles.light;
    }
    return (
        <button className={className} role={"button"} onClick={params.onClick} {...params}>{params.children}</button>
    );
}
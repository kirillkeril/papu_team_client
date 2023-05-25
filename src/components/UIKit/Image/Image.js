import styles from './image.module.css';
export const Image = ({src, width}) => {
    return (
        <div className={styles.imageContainer} style={{width: width}}>
            <img src={src}/>
        </div>
    )
}
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>
                Потерялся в <span className={styles.space}>космосе</span> GIF GALAXY?<br/>
                Несчастные случаи случаются, но не стесняйся использовать меню навигации
            </h2>
            <div className={styles.planet}>
                <div className={styles.inner}>
                    <div className={styles.surface} />
                </div>
                <div className={styles.ring} />
                <div className={styles.moon} />
                <span className={styles.span}>4</span>
                <span className={styles.span}>4</span>
            </div>
        </div>

    )
}

export default NotFound
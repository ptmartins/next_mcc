import styles from './Badge.module.css';

export default function Badge({type, txt}) {

    return(
        <div className={ type ? `${styles.badge} ${styles.type}` : `${ styles.badge }` }>
            { txt }
        </div>
    )

}

import styles from './Footer.module.css';

let dateTime = 'hello';

setInterval(() => {
    dateTime = 'jjj';
  }, 1000);

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.date}>{ dateTime }</div>
            <div className={styles.copyright}> Copyright &copy;2018 Imagen Ltd. </div>
        </footer>
    )
}

export default Footer;
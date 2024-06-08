import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={ styles.header }>
            <h1>Media Control Centre <span className={ styles.version }> version 7.1.1.872 </span> </h1>
        </header>    
    )
}

export default Header;
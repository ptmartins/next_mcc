'use client';

import { FiLogOut } from "react-icons/fi";
import styles from './Header.module.css';

const Header = ({ version, user }) => {

    const loggedIn = localStorage.getItem('mccLoggedIn');

    const handleLogout = () => {
        localStorage.setItem('mccLoggedIn', false);
        window.location = '/';
    }

    return(
        <header className={ styles.header }>
            <h1>Media Control Centre <span className={ styles.version }> version 7.1.1.872 </span> </h1>

            { loggedIn &&
                <>
                    <span className={styles.welcome}> Welcome, Admin. </span> 
                    <button className={`btn ${ styles.logout }`} title="Logout" onClick={ handleLogout }> <FiLogOut /> </button>
                </>
            }
        </header>    
    )
}

export default Header;
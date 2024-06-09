'use client';

import { FaHome, FaInfoCircle, FaClipboardList, FaCog, FaDatabase, FaBriefcase, FaLayerGroup, FaTools, FaStethoscope } from "react-icons/fa";
import { HiQueueList } from "react-icons/hi2";
import { MdAccountCircle, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import styles from './Nav.module.css';

import { usePathname } from 'next/navigation';
import Link from "next/link";

const menus = {
  status: [
    {
      path: '/',
      txt: 'Home',
      icon: <FaHome />
    },
    {
      path: '/logs',
      txt: 'Logs',
      icon: <FaClipboardList />
    },
    {
      path: '/about',
      txt: 'About',
      icon: <FaInfoCircle />
    }
  ],
  configuration: [
    {
      path: '/general',
      txt: 'General',
      icon: <FaCog />
    },
    {
      path: '/databases',
      txt: 'Databases',
      icon: <FaDatabase />
    },
    {
      path: '/queue',
      txt: 'Queue management',
      icon: <HiQueueList />
    },
    {
      path: '/applications',
      txt: 'Applications',
      icon: <FaBriefcase />
    },
    {
      path: '/resourceGroups',
      txt: 'Resource Groups',
      icon: <FaLayerGroup />
    }
  ],
  extras: [
    {
      path: '/remoteTools',
      txt: 'Remote Tools',
      icon: <FaTools />
    }
  ],
  access: [
    {
      path: '/account',
      txt: 'Account',
      icon: <MdAccountCircle />
    },
    {
      path: '/certificates',
      txt: 'Certificates',
      icon: <AiFillSafetyCertificate />
    }
  ],
  service: [
    {
      path: '/diagnostics',
      txt: 'Diagnostics',
      icon: <FaStethoscope />
    },
    {
      path: '/updates',
      txt: 'Updates',
      icon: <MdOutlineSystemUpdateAlt />
    }
  ]
};

const Nav = () => {

    const pathName = usePathname();
    const isActive = (path) => pathName === path;

    return(
        <div className={ styles.nav }>
            <div className="logo" >
                <img src='/images/logo.png' alt="Imagen logo" title="Imagen" className={styles.logo} />
            </div>
            <div className={ styles.menu }>
                {
                Object.keys(menus).map(key => {

                    // Capitalize key title
                    const title = key.charAt(0).toUpperCase() + key.slice(1);

                    return(
                    <div key={ key } className={ styles.block }>
                        <h4 className={ styles.menu__title }> { title } </h4>
                        <div>
                        {menus[key].map((item, index) => {
                            return(
                                <Link href={ item.path } key={ index } className={isActive(item.path) ? `u-link ${styles.active} ${styles.nav__link}` : `u-link ${styles.nav__link}` }>

                                    <i className={ styles.icon }> { item.icon } </i>
                                    <span className={ styles.txt }> { item.txt } </span>

                                </Link>
                            )
                        })}
                        </div>
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Nav;
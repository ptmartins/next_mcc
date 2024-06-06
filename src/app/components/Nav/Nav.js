import styles from './Nav.module.css';

const menus = {
    status: [
      {
        path: '/',
        txt: 'Home',

      },
      {
        path: '/logs',
        txt: 'Logs',
      },
      {
        path: '/about',
        txt: 'About',
      }
    ],
    configuration: [
      {
        path: '/general',
        txt: 'General',
      },
      {
        path: '/databases',
        txt: 'Databases',
      },
      {
        path: '/queue',
        txt: 'Queue management',
      },
      {
        path: '/applications',
        txt: 'Applications',
      },
      {
        path: '/resourceGroups',
        txt: 'Resource Groups'
      }
    ],
    extras: [
      {
        path: '/remoteTools',
        txt: 'Remote Tools',

      }
    ],
    access: [
      {
        path: '/account',
        txt: 'Account',
      },
      {
        path: '/certificates',
        txt: 'Certificates',
      }
    ],
    service: [
      {
        path: '/diagnostics',
        txt: 'Diagnostics',
      },
      {
        path: '/updates',
        txt: 'Updates',
      }
    ]
  };

const Nav = () => {
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
                        <h4 className={ styles.menu_title }> { title } </h4>
                        <div>
                        {menus[key].map((item, index) => {
                            return(
                                <div key={ index } className="">
                                    <i className={ styles.icon }> { item.icon } </i>
                                    <span className={ styles.txt }> { item.txt } </span>
                                </div>
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
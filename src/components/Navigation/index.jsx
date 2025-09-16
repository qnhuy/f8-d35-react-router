import { NavLink } from "react-router"

import styles from './Navigation.module.scss'

function Navigation() {
    const navList = [
        { to: '/', title: 'Home' },
        { to: '/counter', title: 'Counter' },
        { to: '/todo', title: 'Todo List' },
        { to: '/profile', title: 'Profile Card' },
        { to: '/comments', title: 'Comment List' },
        { to: '/products', title: 'Product List' },
        { to: '/weather', title: 'Weather' },
        { to: '/buttons', title: 'Buttons' },
    ]

    return (
        <div className={styles.navWrapper}>
            <ul className="navlist">
                {navList.map((navItem, index) =>
                    <li key={index} className={styles.navItem}>
                        <NavLink
                            to={navItem.to}
                            className={({ isActive }) => isActive ? styles.active : '' }
                        >
                            {navItem.title}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div >
    )
}

export default Navigation
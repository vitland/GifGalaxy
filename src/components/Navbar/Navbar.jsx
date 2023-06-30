import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navigate}>
        <NavLink to='/' end className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}>
            Поиск
        </NavLink>
        <NavLink to='/trend' className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}>
            Тренды
        </NavLink>
        <NavLink to='/random' className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}>
            Случайный гиф
        </NavLink>
    </nav>
  )
}

export default Navbar
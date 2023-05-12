import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className={styles.navBarDiv}>
      <div className={styles.menuDiv}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={styles.navBarUl}>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/clients'>Clients</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
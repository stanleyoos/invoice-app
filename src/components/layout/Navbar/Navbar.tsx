import styles from './Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <FontAwesomeIcon className={styles.fasun} icon={faSun} />
      <ul className={styles.navbarul}>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/clients'>Clients</NavLink></li>
        <li><NavLink className={({isActive}) => isActive && styles.active } to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
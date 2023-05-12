import styles from './Header.module.scss'
import Navbar from '../Navbar/Navbar'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className={styles.cl}>
      <h1><FontAwesomeIcon icon={faFileInvoice}/> 
        <span>Invoice app</span>
      </h1>
      <Navbar/>
    </div>
    
  )
}

export default Header
import styles from './Header.module.scss'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className={styles.cl}>
      <h1>Invoice App</h1>
      <Navbar/>
    </div>
    
  )
}

export default Header
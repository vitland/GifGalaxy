import styles from './Layout.module.scss';
import logo from '../../assets/images/logo.png'

const Layout = ({children}) => {
  return (
    <div className={styles.body}>
      <div className={styles.background} />
        <img className={styles.logo} src={logo} alt='Gif Galaxy logo' />
        {children}
    </div>
  )
}

export default Layout
import styles from './Navbar.module.css'
import NavbarTitle from './NavbarTitle'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavbarTitle />
        <NavbarLogo />
        <NavbarMenu />
    </nav>
  )
}
export default Navbar;
import styles from './Navbar.module.css'

const NavbarLogo = () => {
    return (
        <div className={styles.navbar_logo}>
            <img src="/images/logo.png" alt="Brian Fouts" />
        </div>
    )
}

export default NavbarLogo;
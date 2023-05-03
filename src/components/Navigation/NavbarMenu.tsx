import styles from './Navbar.module.css'
import HamburgerMenu from './HamburgerMenu'
import NavbarLinks from './NavbarLinks'

const NavbarMenu = () => {
    return (
        <div>
            <HamburgerMenu />
            <NavbarLinks />
        </div>
    )
}

export default NavbarMenu;
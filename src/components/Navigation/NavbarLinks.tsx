import Link from 'next/link'
import styles from './Navbar.module.css'

const NavbarLinks = () => {
    return (
        <div className={styles.navbar_links}>
            <ul>
                <li>
                    <Link href="/">
                        <button>About</button>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <button>Skills</button>
                    </Link>
                </li>
                <li>
                    <Link href="/experience">
                        <button>Experience</button>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <button>Projects</button>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLinks;
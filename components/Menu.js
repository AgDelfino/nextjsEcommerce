import Link from 'next/link'
import styles from '../styles/Menu.module.css'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <div>
                <Link className={styles.link} href='/'>Home</Link>
                <Link className={styles.link} href='/store'>Store</Link>
                <Link className={styles.link} href='/faq'>FAQ</Link >
            </div>
            <div>
                <a className={styles.link} href='#'>Cart (0)</a>
            </div>
        </nav>
    )
}

export default Menu;
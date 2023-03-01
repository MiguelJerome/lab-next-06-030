import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

import logo from "../public/logo.png"
import styles from "../styles/Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <Link href="/">
            <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <h1 className={styles.titre}>Titre de page</h1>

        <Menu />
    </header>
}
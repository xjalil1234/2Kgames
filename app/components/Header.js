"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <span className={styles.logoNeon}>2K</span>games
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/#products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                    <Link href="/diagnostic" onClick={() => setIsMenuOpen(false)}>Diagnostic</Link>
                    <Link href="/#about" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
                    <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

                    <Link href="/diagnostic" className="btn-primary mobile-only" onClick={() => setIsMenuOpen(false)}>Repair Now</Link>
                </nav>
                <Link href="/diagnostic" className="btn-primary desktop-only">Repair Now</Link>
            </div>
        </header>
    );
}

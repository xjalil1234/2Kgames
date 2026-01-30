"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <span className={styles.logoNeon}>2K</span>games
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/#products" onClick={() => setIsMenuOpen(false)}>{t('nav.products')}</Link>
                    <Link href="/diagnostic" onClick={() => setIsMenuOpen(false)}>{t('nav.diagnostic')}</Link>
                    <Link href="/#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
                    <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>

                    <Link href="/diagnostic" className="btn-primary mobile-only" onClick={() => setIsMenuOpen(false)}>{t('nav.repair')}</Link>
                    <div className="mobile-only">
                        <LanguageSwitcher />
                    </div>
                </nav>

                <div className={styles.desktopActions}>
                    <div className="desktop-only">
                        <LanguageSwitcher />
                    </div>
                    <Link href="/diagnostic" className="btn-primary desktop-only">{t('nav.repair')}</Link>
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
            </div>
        </header>
    );
}

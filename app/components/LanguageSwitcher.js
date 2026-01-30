"use client";
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className={styles.container} ref={dropdownRef}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
            >
                <span className={styles.icon}>🌐</span>
                <span className={styles.current}>{language.toUpperCase()}</span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>▾</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <button
                        className={`${styles.option} ${language === 'fr' ? styles.optionActive : ''}`}
                        onClick={() => handleLanguageChange('fr')}
                    >
                        Français
                    </button>
                    <button
                        className={`${styles.option} ${language === 'en' ? styles.optionActive : ''}`}
                        onClick={() => handleLanguageChange('en')}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
}

"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { DICTIONARY } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    const t = (path) => {
        const keys = path.split('.');
        let result = DICTIONARY[language];
        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path; // Fallback to path if not found
            }
        }
        return result;
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

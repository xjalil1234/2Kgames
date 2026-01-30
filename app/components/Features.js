"use client";
import styles from './Features.module.css';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const FEATURES_DATA = {
    en: [
        { title: 'Expert Techs', desc: 'Certified professionals for all gaming systems.', icon: '⚡' },
        { title: 'Quick Turnaround', desc: 'Most repairs completed within 24-48 hours.', icon: '🕒' },
        { title: 'Best Prices', desc: 'Competitive pricing with no hidden fees.', icon: '💎' },
        { title: 'Warranty', desc: '90-day warranty on all parts and labor.', icon: '🛡️' },
    ],
    fr: [
        { title: 'Techniciens Experts', desc: 'Professionnels certifiés pour tous les systèmes de jeux.', icon: '⚡' },
        { title: 'Délai Rapide', desc: 'La plupart des réparations terminées sous 24-48h.', icon: '🕒' },
        { title: 'Meilleurs Prix', desc: 'Prix compétitifs sans frais cachés.', icon: '💎' },
        { title: 'Garantie', desc: 'Garantie de 90 jours sur toutes les pièces et la main-d\'œuvre.', icon: '🛡️' },
    ]
};

export default function Features() {
    const { t, language } = useLanguage();
    const features = FEATURES_DATA[language];

    return (
        <section className={styles.section}>
            <div className="container">
                <ScrollReveal>
                    <div className={styles.header}>
                        <h2 className={styles.title}>{t('features.title')} <span className="text-gradient">{t('features.subtitle')}</span>?</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{f.icon}</div>
                                <h3 className={styles.featureTitle}>{f.title}</h3>
                                <p className={styles.featureDesc}>{f.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className={styles.brandingWrapper}>
                    <a
                        href="https://www.instagram.com/xrion.agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.subtleBranding}
                    >
                        {t('branding.builtBy')}
                    </a>
                </div>
            </div>
        </section>
    );
}

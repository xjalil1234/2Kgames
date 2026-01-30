"use client";
import styles from './Contact.module.css';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <ScrollReveal animation="left">
                        <div className={styles.info}>
                            <h2 className={styles.title}>{t('contact.title')} <span className="text-gradient">{t('contact.subtitle')}</span></h2>
                            <p className={styles.subtitle}>{t('contact.desc')}</p>

                            <div className={styles.contactDetails}>
                                <div className={styles.item}>
                                    <span className={styles.icon}>📍</span>
                                    <div>
                                        <strong>{t('contact.location')}</strong>
                                        <p>123 Gaming Street, Algiers, DZ</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.icon}>📞</span>
                                    <div>
                                        <strong>{t('contact.phone')}</strong>
                                        <p>+213 0555555555</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.icon}>✉️</span>
                                    <div>
                                        <strong>{t('contact.email')}</strong>
                                        <p>xrion.agency@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="right">
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <input type="text" placeholder={t('contact.form.name')} />
                            </div>
                            <div className={styles.formGroup}>
                                <input type="email" placeholder={t('contact.form.email')} />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea placeholder={t('contact.form.message')} rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>{t('contact.form.send')}</button>
                        </form>
                    </ScrollReveal>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} 2Kgames. {t('copyright')}</p>
                    <a
                        href="https://www.instagram.com/xrion.agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.branding}
                    >
                        <img src="/images/LOGO xrion.png" alt="Xrion Agency" className={styles.brandingLogo} />
                        <span>{t('branding.builtBy')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

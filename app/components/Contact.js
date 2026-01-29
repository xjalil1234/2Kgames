import styles from './Contact.module.css';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <ScrollReveal animation="left">
                        <div className={styles.info}>
                            <h2 className={styles.title}>Get in <span className="text-gradient">Touch</span></h2>
                            <p className={styles.subtitle}>Have questions? We're here to help you get back in the game.</p>

                            <div className={styles.contactDetails}>
                                <div className={styles.item}>
                                    <span className={styles.icon}>📍</span>
                                    <div>
                                        <strong>Location</strong>
                                        <p>123 Gaming Street, Algiers, DZ</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.icon}>📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+213 555 123 456</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.icon}>✉️</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>support@neoncore.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="right">
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className={styles.formGroup}>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea placeholder="How can we help?" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </ScrollReveal>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} 2Kgames. All rights reserved.
                </div>
            </div>
        </section>
    );
}

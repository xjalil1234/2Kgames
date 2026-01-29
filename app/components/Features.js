import styles from './Features.module.css';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
    { title: 'Expert Techs', desc: 'Certified professionals for all gaming systems.', icon: '⚡' },
    { title: 'Quick Turnaround', desc: 'Most repairs completed within 24-48 hours.', icon: '🕒' },
    { title: 'Best Prices', desc: 'Competitive pricing with no hidden fees.', icon: '💎' },
    { title: 'Warranty', desc: '90-day warranty on all parts and labor.', icon: '🛡️' },
];

export default function Features() {
    return (
        <section className={styles.section}>
            <div className="container">
                <ScrollReveal>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Why Choose <span className="text-gradient">NeonCore</span>?</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {FEATURES.map((f, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{f.icon}</div>
                                <h3 className={styles.featureTitle}>{f.title}</h3>
                                <p className={styles.featureDesc}>{f.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

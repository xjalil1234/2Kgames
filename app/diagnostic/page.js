import Header from '../components/Header';
import Contact from '../components/Contact';
import DiagnosticTool from '../components/DiagnosticTool';
import styles from './page.module.css';

export default function DiagnosticPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <section className={styles.section}>
                        <DiagnosticTool />
                    </section>
                </div>
            </main>
            <Contact />
        </>
    );
}

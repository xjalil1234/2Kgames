"use client";
import { use, useMemo } from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './page.module.css';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { useLanguage } from '../../context/LanguageContext';
import { PRODUCTS_LOCALIZED } from '../../i18n';
import Link from 'next/link';

export default function ProductPage({ params }) {
    const { id } = use(params);
    const { t, language } = useLanguage();

    const product = useMemo(() => {
        const localizedList = PRODUCTS_LOCALIZED[language] || PRODUCTS_LOCALIZED['fr'];
        return localizedList.find((p) => p.id === id);
    }, [id, language]);

    if (!product) return (
        <>
            <Header />
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1>Product not found / Produit non trouvé</h1>
                <Link href="/#products" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                    {t('nav.products')}
                </Link>
            </div>
            <Contact />
        </>
    );

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <Link href="/#products" className={styles.backLink}>
                        ← {language === 'fr' ? 'Retour aux produits' : 'Back to Products'}
                    </Link>

                    <div className={styles.grid}>
                        <div className={styles.gallery}>
                            <ImageCarousel images={product.images} />
                        </div>

                        <div className={styles.info}>
                            {product.tag && <span className={styles.tag}>{product.tag}</span>}
                            <h1 className={styles.title}>{product.name}</h1>
                            <div className={styles.price}>{product.price.toLocaleString()} DA</div>

                            <p className={styles.desc}>{product.description}</p>

                            {product.features && (
                                <ul className={styles.features}>
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Contact />
        </>
    );
}

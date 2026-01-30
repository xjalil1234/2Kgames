"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";
import { useLanguage } from "./context/LanguageContext";
import { PRODUCTS_LOCALIZED } from "./i18n";

export default function Home() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a fallback to avoid undefined errors during early render or transition
  const activeLanguage = language || 'fr';
  const products = PRODUCTS_LOCALIZED[activeLanguage] || PRODUCTS_LOCALIZED['fr'];

  // Debugging log to see what's happening in the terminal
  console.log('Rendering Home:', { activeLanguage, productCount: products.length });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                {t('hero.title')} <br />
                <span className="text-gradient">{t('hero.subtitle')}</span>
              </h1>
              <p className={styles.subtitle}>
                {t('hero.desc')}
              </p>
              <div className={styles.actions}>
                <Link href="/#products" className="btn-primary">{t('hero.viewProducts')}</Link>
                <Link href="/diagnostic" className="btn-secondary">{t('hero.diagnose')}</Link>
              </div>
            </div>
          </div>
          <div className={styles.heroGlow}></div>
        </section>

        {/* Products Section */}
        <section id="products" className={styles.section}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{t('products.title')} <span className="text-gradient">{t('products.subtitle')}</span></h2>
                <p className={styles.sectionSubtitle}>{t('products.desc')}</p>
              </div>
            </ScrollReveal>

            <div className={styles.grid}>
              {products && products.map((product, index) => (
                <ScrollReveal key={product.id || index} delay={index * 100}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    image={product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.jpg'}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Contact />
    </>
  );
}

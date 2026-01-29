import Link from 'next/link';
import styles from "./page.module.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";
import { products } from "./data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                Next Level <br />
                <span className="text-gradient">Gaming & Repairs</span>
              </h1>
              <p className={styles.subtitle}>
                Your destination for the latest consoles and expert diagnostics.
                We bring your gear back to life.
              </p>
              <div className={styles.actions}>
                <Link href="/#products" className="btn-primary">View Products</Link>
                <Link href="/diagnostic" className="btn-secondary">Diagnose Console</Link>
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
                <h2 className={styles.sectionTitle}>Featured <span className="text-gradient">Gear</span></h2>
                <p className={styles.sectionSubtitle}>Top tier equipment for the ultimate gaming experience.</p>
              </div>
            </ScrollReveal>

            <div className={styles.grid}>
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 100}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    tag={product.tag}
                    image={product.images[0]}
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

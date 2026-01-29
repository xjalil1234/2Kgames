import { products } from '../../data/products';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './page.module.css';
import Header from '../../components/Header';
import Contact from '../../components/Contact';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) return <div>Product not found</div>;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <a href="/#products" className={styles.backLink}>← Back to Products</a>

                    <div className={styles.grid}>
                        <div className={styles.gallery}>
                            <ImageCarousel images={product.images} />
                        </div>

                        <div className={styles.info}>
                            {product.tag && <span className={styles.tag}>{product.tag}</span>}
                            <h1 className={styles.title}>{product.name}</h1>
                            <div className={styles.price}>{product.price} DA</div>

                            <p className={styles.desc}>{product.description}</p>

                            {product.features && (
                                <ul className={styles.features}>
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            )}

                            {/* <div className={styles.actions}>
                                <button className="btn-primary">Buy Now</button>
                                <button className="btn-secondary">Check Availability</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
            <Contact />
        </>
    );
}

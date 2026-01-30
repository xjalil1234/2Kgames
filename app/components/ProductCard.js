"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ id, name, price, tag, image }) {
    const { t } = useLanguage();
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* {tag && <span className={styles.tag}>{tag}</span>} */}
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.details}>
                    <span className={styles.price}>{price.toLocaleString()} DA</span>
                    <Link href={`/products/${id}`} className={styles.btn}>
                        {t('products.viewDetails')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

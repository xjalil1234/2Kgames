import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, name, price, image, tag }) {
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
                <p className={styles.price}>{price} DA</p>
                <Link href={`/products/${id}`} className={styles.button}>View Details</Link>
            </div>
        </div>
    );
}

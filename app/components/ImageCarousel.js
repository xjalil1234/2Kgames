"use client";
import Image from 'next/image';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.mainImageContainer}>
                <Image
                    src={images[currentIndex]}
                    alt="Product Image"
                    fill
                    className={styles.mainImage}
                    priority
                />
            </div>

            {images.length > 1 && (
                <div className={styles.thumbs}>
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            className={`${styles.thumb} ${idx === currentIndex ? styles.active : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        >
                            <div className={styles.thumbImageWrapper}>
                                <Image
                                    src={img}
                                    alt={`View ${idx + 1}`}
                                    fill
                                    className={styles.thumbImage}
                                    sizes="80px"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

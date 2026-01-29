"use client";
import useScrollReveal from '../hooks/useScrollReveal';

export default function ScrollReveal({
    children,
    animation = 'up', // 'up', 'left', 'right', 'fade'
    delay = 0,
    once = true,
    threshold = 0.1,
    className = ""
}) {
    const [ref, isVisible] = useScrollReveal({ once, threshold });

    const getAnimationClass = () => {
        switch (animation) {
            case 'left': return 'reveal-left';
            case 'right': return 'reveal-right';
            case 'fade': return '';
            case 'up':
            default: return 'reveal-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`reveal ${getAnimationClass()} ${isVisible ? 'active' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

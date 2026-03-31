import React, { useEffect, useRef, useState, useCallback } from 'react';

const isSSR = typeof window === 'undefined' || !!globalThis.__SSR__;

export default function AnimatedCounter({ value, suffix = '', duration = 2000, delay = 0 }) {
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    // Parse the numeric part and any prefix/suffix
    const numericMatch = value.match(/^(\D*)(\d+)(\D*)$/);
    const isAnimatable = !!numericMatch && !isSSR;
    const prefix = numericMatch ? numericMatch[1] : '';
    const target = numericMatch ? parseInt(numericMatch[2], 10) : 0;
    const trailingSuffix = numericMatch ? numericMatch[3] + suffix : suffix;

    // During SSR, show the final value immediately
    const [display, setDisplay] = useState(
        isSSR ? (numericMatch ? String(target) : value)
            : (numericMatch ? '0' : value)
    );

    const startAnimation = useCallback(() => {
        if (hasAnimated.current || !isAnimatable) return;
        hasAnimated.current = true;

        const timeout = setTimeout(() => {
            let startTime = null;
            let frame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setDisplay(String(Math.round(eased * target)));

                if (progress < 1) {
                    frame = requestAnimationFrame(animate);
                }
            };

            frame = requestAnimationFrame(animate);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isAnimatable, target, duration, delay]);

    useEffect(() => {
        if (!isAnimatable) return;

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isAnimatable, startAnimation]);

    if (!numericMatch) {
        return <span ref={ref}>{value}</span>;
    }

    return <span ref={ref}>{prefix}{display}{trailingSuffix}</span>;
}

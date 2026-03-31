import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [display, setDisplay] = useState('0');

    // Parse the numeric part and any prefix/suffix
    const numericMatch = value.match(/^(\D*)(\d+)(\D*)$/);
    const prefix = numericMatch ? numericMatch[1] : '';
    const target = numericMatch ? parseInt(numericMatch[2], 10) : 0;
    const trailingSuffix = numericMatch ? numericMatch[3] + suffix : suffix;

    useEffect(() => {
        if (!isInView || !numericMatch) {
            if (!numericMatch) setDisplay(value);
            return;
        }

        let startTime = null;
        let frame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(String(current));

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [isInView, target, duration, numericMatch, value]);

    if (!numericMatch) {
        return <span ref={ref}>{value}</span>;
    }

    return <span ref={ref}>{prefix}{display}{trailingSuffix}</span>;
}

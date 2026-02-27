"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollElementProps {
    children: ReactNode;
    direction?: 'up' | 'left' | 'right' | 'none';
    delay?: number;
    className?: string;
}

export const ScrollElement = ({ children, direction = 'up', delay = 0, className = '' }: ScrollElementProps) => {
    const directions = {
        up: { y: 50, x: 0 },
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...directions[direction], filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
};

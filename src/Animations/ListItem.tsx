import { motion, useInView } from "framer-motion"; import React, { ReactNode, useRef } from 'react'

interface DivContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}



const ListItem = ({ children, className, delay }: DivContainerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.li
            ref={ref}
            animate={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                    ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
                    : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1)",
            }}
            transition={{
                duration: 0.3,
                ease: [0.645, 0.045, 0.355, 1],
                delay,
            }}
            className={className}
        >
            {children}
        </motion.li>
    )
}

export default ListItem
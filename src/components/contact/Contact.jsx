import { motion } from "framer-motion";

const variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const variantSvgPath = {
    initial: { pathLength: 0 },
    animate: {
        pathLength: 1,
        transition: {
            duration: 16,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};

const Contact = () => {
    return (
        <motion.div
            initial="initial"
            className="wrapper"
            variants={variants}
            whileInView="animate"
        >
            <motion.div className="texts" variants={variants}>
                <motion.h1 variants={variants}>Poďme spolupracovať</motion.h1>
                <motion.div variants={variants}>
                    <h2>E-Mail</h2>
                    <span>ondrej.vrto@gmail.com</span>
                </motion.div>
                <motion.div variants={variants}>
                    <h2>Adresa</h2>
                    <span>Zvolen, Slovensko</span>
                </motion.div>
                <motion.div variants={variants}>
                    <h2>Telefón</h2>
                    <span>+421 907 577 540</span>
                </motion.div>
            </motion.div>

            <motion.div variants={variants} className="phone">
                <svg viewBox="-1 -1 35 35" fill="none" strokeWidth={0.4}>
                    <motion.path
                        variants={variantSvgPath}
                        d="M16.33 0C7.33 0 0 7.33 0 16.33c0 9.01 7.33 16.34 16.33 16.34a1 1 0 1 0 0-2.02c-7.9 0-14.31-6.42-14.31-14.32S8.43 2.01 16.32 2.01c7.9 0 14.32 6.43 14.32 14.32 0 3.3-1.76 6.57-4.27 7.96-.91.5-1.9.75-2.96.76a4.73 4.73 0 0 0 1.6-1.53c.07-.12.18-.23.23-.36.33-.79.36-1.68.56-2.52.24-1.06-4.66-3.14-5.09-1.81-.15.5-.39 2.05-.7 2.46-.27.36-.95.19-1.37-.17-1.12-.95-2.37-2.35-3.46-3.46l-.1-.1-.08-.08c-1.11-1.1-2.51-2.34-3.46-3.46-.36-.42-.54-1.1-.17-1.38.41-.3 1.97-.54 2.46-.7 1.32-.42-.75-5.32-1.82-5.08-.83.2-1.72.23-2.51.55-.14.06-.24.16-.36.24-2.8 1.78-3.16 6.08-.43 9.3a75.69 75.69 0 0 0 3.24 3.57l.1.1.08.09c1.17 1.11 2.54 2.76 4.78 4.25 4.7 3.14 8.3 2.26 10.43 1.1 3.67-2.02 5.32-6.34 5.32-9.72C32.67 7.33 25.34 0 16.33 0z"
                    />
                    <motion.path
                        variants={variantSvgPath}
                        d="M28.19 16.5h-1.67a9.87 9.87 0 0 0-9.85-9.85V4.98c6.35 0 11.52 5.17 11.52 11.52zM16.67 7.86v1.66a6.99 6.99 0 0 1 6.98 6.98h1.66a8.65 8.65 0 0 0-8.64-8.64z"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default Contact;

import { SECTIONS } from "../../App";
import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.05,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = ({ closeMenu }) => {
    return (
        <motion.div className="links" variants={variants}>
            {SECTIONS.map((item) => (
                <motion.a
                    key={item.id}
                    onClick={closeMenu}
                    href={`#${item.id}`}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {item.title}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;

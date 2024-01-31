import { motion } from "framer-motion";
import myPersonalPhoto from "../../../assets/images/personal-photo/ai5.png";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: "30%",
    },
    animate: {
        x: "-580%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};

const Hero = () => {
    return (
        <>
            <div className="wrapper">
                <motion.div
                    className="texts"
                    initial="initial"
                    animate="animate"
                    variants={textVariants}
                >
                    <motion.h2 variants={textVariants}>
                        Ondrej <span>Vrťo</span>
                    </motion.h2>

                    <motion.h1 variants={textVariants}>Web developer</motion.h1>

                    <motion.div variants={textVariants} className="buttons">
                        <motion.a variants={textVariants} href="#portfolio">
                            Výber z mojich prác
                        </motion.a>
                        <motion.a variants={textVariants} href="#contact">
                            Kontaktuj ma
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="mouse"
                        animate="scrollButton"
                        variants={textVariants}
                        alt="Ikona skrolovania myškou"
                    >
                        <svg
                            viewBox="0 0 18 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="currentcolor">
                                <path d="M9 16.93a2 2 0 0 0 2-2v-3a2 2 0 0 0-4 0v3c0 1.1.9 2 2 2zm-1-5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3z" />
                                <path d="M0 14v9a9.01 9.01 0 0 0 18 0v-9a9.01 9.01 0 0 0-18 0zm9-8a8 8 0 0 1 8 8v9a8 8 0 0 1-16 0v-9a8 8 0 0 1 8-8z" />
                            </g>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial="initial"
                animate="animate"
                className="sliding"
                variants={sliderVariants}
            >
                Zodpovednosť Kvalita Poctivosť
            </motion.div>

            <div className="images">
                <img
                    src={myPersonalPhoto}
                    alt="Osobná fotografia Ondrej Vrťo."
                />
            </div>
        </>
    );
};

export default Hero;

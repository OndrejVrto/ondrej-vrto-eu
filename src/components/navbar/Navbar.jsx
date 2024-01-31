import { motion } from "framer-motion";

const whileHover = { scale: 1.4 };
const transition = { type: "spring", stiffness: 400, damping: 10 };

const Navbar = () => {
    return (
        <header id="navbar">
            <div className="social">
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://www.linkedin.com/in/ing-ondrej-vrto-iwe/"
                >
                    <img
                        alt="Logo LinkedIn"
                        src="/images/social/linkedin-logo.svg"
                    />
                </motion.a>
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://www.facebook.com/Ondrej.Vrto"
                >
                    <img
                        alt="Logo Facebook"
                        src="/images/social/facebook-logo.svg"
                    />
                </motion.a>
                {/* <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://www.youtube.com/channel/UCpjE98HHZwT-10zEvnOY7YQ"
                >
                    <img src="/images/social/youtube-logo.svg" alt="Logo YouTube" />
                </motion.a> */}
                {/* <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://twitter.com/OndrejVrto"
                >
                    <img src="/images/social/twitter-logo-new.svg" alt="Logo Twitter" />
                </motion.a> */}
                {/* <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://stackoverflow.com/users/18586849/donondrej"
                >
                    <img src="/images/social/stackoverflow-logo.svg" alt="Logo StackOverflow" />
                </motion.a> */}
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://github.com/OndrejVrto"
                >
                    <img
                        alt="Logo Github"
                        src="/images/social/github-logo.svg"
                    />
                </motion.a>
            </div>
        </header>
    );
};

export default Navbar;

import { motion } from "framer-motion";
import githubLogo from "../../../assets/social/github-logo.svg";
import facebookLogo from "../../../assets/social/facebook-logo.svg";
import linkedInLogo from "../../../assets/social/linkedin-logo.svg";
// import youtubeLogo from "../../../assets/social/youtube-logo.svg";
// import twitterLogo from "../../../assets/social/twitter-logo-new.svg";
import stackOverflowLogo from "../../../assets/social/stackoverflow-logo.svg";

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
                    <img src={linkedInLogo} alt="Logo LinkedIn" />
                </motion.a>
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://www.facebook.com/Ondrej.Vrto"
                >
                    <img src={facebookLogo} alt="Logo Facebook" />
                </motion.a>
                {/* <motion.a
                transition={transition}
                whileHover={whileHover}
                href="https://www.youtube.com/channel/UCpjE98HHZwT-10zEvnOY7YQ"
            >
                <img src={youtubeLogo} alt="Logo YouTube" />
            </motion.a> */}
                {/* <motion.a
                transition={transition}
                whileHover={whileHover}
                href="https://twitter.com/OndrejVrto"
            >
                <img src={twitterLogo} alt="Logo Twitter" />
            </motion.a> */}
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://stackoverflow.com/users/18586849/donondrej"
                >
                    <img src={stackOverflowLogo} alt="Logo StackOverflow" />
                </motion.a>
                <motion.a
                    transition={transition}
                    whileHover={whileHover}
                    href="https://github.com/OndrejVrto"
                >
                    <img src={githubLogo} alt="Logo Github" />
                </motion.a>
            </div>
        </header>
    );
};

export default Navbar;

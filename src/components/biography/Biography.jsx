import { motion } from "framer-motion";

const whileHover = { scale: 1.2 };
const transition = { type: "spring", stiffness: 400, damping: 10 };

function Biography() {
    return (
        <>
            <div className="wrapper developer">
                <a
                    href="/public/curriculum/ing-ondrej-vrto-ise-zivotopis-programator.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div whileHover={whileHover} transition={transition}>
                        <img
                            alt="Ikona Curriculum"
                            src="/images/curriculum.svg"
                        />
                        <h3>Životopis</h3>
                    </motion.div>
                </a>
                <a
                    href="/public/curriculum/ing-ondrej-vrto-ise-certifikaty-programator.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div whileHover={whileHover} transition={transition}>
                        <img
                            alt="Ikona Certifikaty"
                            src="/images/certificate.svg"
                        />
                        <h3>Certifikaty</h3>
                    </motion.div>
                </a>
            </div>

            <h2>Strojár</h2>
            <div className="wrapper engineer">
                <a
                    href="/public/curriculum/ing-ondrej-vrto-ise-zivotopis-strojar.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div whileHover={whileHover} transition={transition}>
                        <img
                            alt="Ikona Curriculum"
                            src="/images/curriculum.svg"
                        />
                        <h4>Životopis - strojár</h4>
                    </motion.div>
                </a>
                <a
                    href="/public/curriculum/ing-ondrej-vrto-ise-certifikaty-strojar.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div whileHover={whileHover} transition={transition}>
                        <img
                            alt="Ikona Certifikaty"
                            src="/images/certificate.svg"
                        />
                        <h4>Certifikaty - strojár</h4>
                    </motion.div>
                </a>
            </div>
        </>
    );
}

export default Biography;

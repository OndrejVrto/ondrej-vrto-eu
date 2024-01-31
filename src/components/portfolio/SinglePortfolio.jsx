import { useState } from "react";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Technology from "../technologies/Technology";
import goUpIcon from "../../../assets/images/go-up.svg";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import githubOutlineLogo from "../../../assets/images/technologies/github-outline.svg";

const SinglePortfolio = ({ item, odd = true }) => {
    const [openGallery, setOpenGallery] = useState(false);

    return (
        <article>
            {item.gallery?.length > 0 && (
                <Lightbox
                    open={openGallery}
                    slides={[...item.gallery]}
                    plugins={[Fullscreen, Zoom]}
                    close={() => setOpenGallery(false)}
                />
            )}

            <h2 className="title top">{item.title}</h2>

            <div
                onClick={() => setOpenGallery(true)}
                className={`portfolio-images ${odd ? "odd" : ""}`}
            >
                <img alt={item.thumbnail.alt} src={item.thumbnail.src} />
            </div>

            <motion.div className={`texts ${odd ? "odd" : ""}`}>
                <h2 className="title bottom" aria-hidden>
                    {item.title}
                </h2>
                <p>{item.description}</p>

                <ul className="technology">
                    {item.technologies.map((technology) => (
                        <Technology
                            poppoverOff
                            key={technology.title}
                            technology={technology}
                        />
                    ))}
                </ul>

                <div className="buttons">
                    {item.github && (
                        <a href={item.github}>
                            <img alt="Logo Github" src={githubOutlineLogo} />
                            <div>Zdrojové kódy</div>
                        </a>
                    )}
                    {item.link && (
                        <a href={item.link}>
                            Výsledok naživo
                            <img alt="Šípka nahor" src={goUpIcon} />
                        </a>
                    )}
                </div>
            </motion.div>
        </article>
    );
};

export default SinglePortfolio;

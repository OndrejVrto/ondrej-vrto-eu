import { useState } from "react";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Technology from "../technologies/Technology";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { CLOUDINARY_ASSET_URL } from "../../portfolio-items";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const SinglePortfolio = ({ item, odd = true }) => {
    const [openGallery, setOpenGallery] = useState(false);

    const slides = [...item.gallery].map((image) => ({
        ...image,
        src: CLOUDINARY_ASSET_URL + image.src,
    }));

    return (
        <>
            {item.gallery?.length > 0 && (
                <Lightbox
                    slides={slides}
                    open={openGallery}
                    close={() => setOpenGallery(false)}
                    plugins={[Fullscreen, Zoom, Captions]}
                />
            )}

            <article>
                <h2 className="title top">{item.title}</h2>

                <div className="body">
                    <div
                        onClick={() => setOpenGallery(true)}
                        className={`portfolio-images ${odd ? "odd" : ""}`}
                    >
                        <img
                            width="1024"
                            alt={item.thumbnail.title}
                            src={CLOUDINARY_ASSET_URL + item.thumbnail.src}
                        />
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
                                <a href={item.github} className="button">
                                    <img
                                        alt="Logo Github"
                                        src="/images/social/github-outline.svg"
                                    />
                                    <div>Zdrojové kódy</div>
                                </a>
                            )}
                            {item.link && (
                                <a href={item.link} className="button">
                                    Výsledok naživo
                                    <img
                                        alt="Šípka nahor"
                                        src="/images/go-up.svg"
                                    />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </article>
        </>
    );
};

export default SinglePortfolio;

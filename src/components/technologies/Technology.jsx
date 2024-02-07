import { motion } from "framer-motion";
import React, { useState } from "react";
import DunningKrugerGraph from "./DunningKrugerGraph";

const popoverVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};

export default function Technology({
    technology,
    progressOff = false,
    poppoverOff = false,
}) {
    const [isOpen, setIsOpen] = useState(false);

    let skillColor = "low";
    if (technology.skill > 40) skillColor = "medium";
    if (technology.skill > 70) skillColor = "high";

    return (
        <li
            key={technology.title}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(!isOpen)}
        >
            <motion.img
                alt={technology.title}
                title={technology.title}
                whileHover={{ scale: 1.3 }}
                src={`/images/technologies/${technology.image}`}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            {isOpen && !poppoverOff && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="popover"
                    variants={popoverVariant}
                >
                    <h3>{technology.title}</h3>
                    {!progressOff && technology.skill && (
                        // <progress
                        //     min="0"
                        //     max="100"
                        //     className={skillColor}
                        //     value={technology.skill}
                        // />
                        <DunningKrugerGraph value={technology.skill} />
                    )}
                </motion.div>
            )}
        </li>
    );
}

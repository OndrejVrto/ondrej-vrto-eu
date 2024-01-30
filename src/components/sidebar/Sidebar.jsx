import Links from "./Links";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const variants = {
    open: {
        transition: {
            stiffness: 20,
            type: "spring",
        },
        clipPath: "circle(50rem at 3.125rem 3rem)",
    },
    closed: {
        transition: {
            delay: 0.5,
            damping: 40,
            type: "spring",
            stiffness: 400,
        },
        clipPath: "circle(1.875rem at 3.125rem 3rem)",
    },
};
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div id="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="menu" variants={variants}>
                <Links closeMenu={() => setOpen(false)} />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;

import React, { useState } from "react";
import clearIcon from "../../../assets/images/clear-all.svg";

export default function PortfolioFilter({ handleFilter }) {
    const [tag, setTag] = useState(null);

    function handleTag(filterTag) {
        if (["configurator", "admin", "package", "web", null].includes(tag)) {
            setTag(filterTag);
            handleFilter(filterTag);
        }
    }

    return (
        <div id="portfolio-filter">
            <button
                className={tag === "configurator" && "active"}
                onClick={() => handleTag("configurator")}
            >
                Konfigurátory
            </button>
            <button
                className={tag === "admin" && "active"}
                onClick={() => handleTag("admin")}
            >
                Administrácia na mieru
            </button>
            <button
                className={tag === "package" && "active"}
                onClick={() => handleTag("package")}
            >
                Balíčky
            </button>
            <button
                className={tag === "web" && "active"}
                onClick={() => handleTag("web")}
            >
                Web podľa designu
            </button>
            <button
                className={tag === null ? "reset active" : "reset"}
                onClick={() => handleTag(null)}
            >
                <img src={clearIcon} alt="Reset filter icon" />
            </button>
        </div>
    );
}

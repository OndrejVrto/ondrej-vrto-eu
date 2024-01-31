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

    function getClassButton(type) {
        return type === tag ? "button active" : "button";
    }

    return (
        <div id="portfolio-filter">
            <button
                onClick={() => handleTag("configurator")}
                className={getClassButton("configurator")}
            >
                Konfigurátory
            </button>
            <button
                onClick={() => handleTag("admin")}
                className={getClassButton("admin")}
            >
                Administrácia na mieru
            </button>
            <button
                onClick={() => handleTag("package")}
                className={getClassButton("package")}
            >
                Balíčky
            </button>
            <button
                onClick={() => handleTag("web")}
                className={getClassButton("web")}
            >
                Web podľa designu
            </button>
            <button
                onClick={() => handleTag(null)}
                className={tag === null ? "reset active" : "reset"}
            >
                <img src={clearIcon} alt="Reset filter icon" />
            </button>
        </div>
    );
}

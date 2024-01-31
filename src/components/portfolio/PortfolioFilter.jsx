import React, { useState } from "react";

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
                aria-description="Filtrovať výsledky podľa kľúčového slova: Konfigurátor"
                onClick={() => handleTag("configurator")}
                className={getClassButton("configurator")}
            >
                Konfigurátory
            </button>
            <button
                aria-description="Filtrovať výsledky podľa kľúčového slova: Administrácia"
                onClick={() => handleTag("admin")}
                className={getClassButton("admin")}
            >
                Administrácia na mieru
            </button>
            <button
                aria-description="Filtrovať výsledky podľa kľúčového slova: Balíček"
                onClick={() => handleTag("package")}
                className={getClassButton("package")}
            >
                Balíčky
            </button>
            <button
                aria-description="Filtrovať výsledky podľa kľúčového slova: Web podľa designu"
                onClick={() => handleTag("web")}
                className={getClassButton("web")}
            >
                Web podľa designu
            </button>
            <button
                aria-label="Resetovať filter"
                onClick={() => handleTag(null)}
                className={tag === null ? "reset active" : "reset"}
            >
                <svg
                    viewBox="-4 -4 23.9 23.9"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="-4"
                        y="-4"
                        rx="50%"
                        width="23.8"
                        height="23.9"
                        fill="transparent"
                    />
                    <path
                        fill="currentcolor"
                        d="M14 0a1 1 0 0 1 .7 1.7l-.8.8A8 8 0 1 1 0 9.1 1 1 0 0 1 2 9a6 6 0 1 0 10.3-5l-.7.8A1 1 0 0 1 10 4V0h4ZM1.5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.2-2.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                    />
                </svg>
            </button>
        </div>
    );
}

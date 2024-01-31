import { useState } from "react";
import SinglePortfolio from "./SinglePortfolio";
import PortfolioFilter from "./PortfolioFilter.jsx";
import PORTFOLIO_ITEMS from "../../portfolio-items.js";

const sortPortfolio = (portfolio) =>
    portfolio.sort((a, b) => a.order > b.order);

const Portfolio = () => {
    const [filteredPortfolio, setFilteredPortfolio] = useState(
        sortPortfolio(PORTFOLIO_ITEMS)
    );

    function handleFilter(tag) {
        const filteredItems =
            null === tag
                ? PORTFOLIO_ITEMS
                : PORTFOLIO_ITEMS.filter((item) => item.tags.includes(tag));

        setFilteredPortfolio(sortPortfolio(filteredItems));
    }

    return (
        <>
            <PortfolioFilter handleFilter={handleFilter} />

            <div className="portfolio-wrapper">
                {filteredPortfolio?.map((item, i) => (
                    <SinglePortfolio item={item} key={item.id} odd={i % 2} />
                ))}
            </div>
        </>
    );
};

export default Portfolio;

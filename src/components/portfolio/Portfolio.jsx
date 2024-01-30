import SinglePortfolio from "./SinglePortfolio";
import PORTFOLIO_ITEMS from "../../portfolio-items.js";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            {PORTFOLIO_ITEMS.map((item, i) => (
                <SinglePortfolio item={item} key={item.id} odd={i % 2} />
            ))}
        </div>
    );
};

export default Portfolio;

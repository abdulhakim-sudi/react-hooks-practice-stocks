// src/components/PortfolioContainer.js
import React from "react";

function PortfolioContainer({ portfolio, onSellStock }) {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      {portfolio.length === 0 ? (
        <p>No stocks in portfolio</p>
      ) : (
        portfolio.map((stock) => (
          <div key={stock.id}>
            <h3>{stock.name} ({stock.ticker})</h3>
            <button onClick={() => onSellStock(stock)}>Sell</button>
          </div>
        ))
      )}
    </div>
  );
}

export default PortfolioContainer;

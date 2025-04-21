// src/components/StockContainer.js
import React from "react";
import Stock from "./Stock";  // Import Stock component

function StockContainer({ stocks, onBuyStock }) {
  return (
    <div className="stock-container">
      <h2>Stocks</h2>
      {stocks.length === 0 ? (
        <p>No stocks available</p>
      ) : (
        stocks.map((stock) => (
          <Stock key={stock.id} stock={stock} onBuyStock={onBuyStock} />
        ))
      )}
    </div>
  );
}

export default StockContainer;

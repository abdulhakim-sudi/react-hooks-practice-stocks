// src/components/Stock.js
import React from "react";

function Stock({ stock, onBuyStock }) {
  return (
    <div className="stock">
      <h3>{stock.name} ({stock.ticker})</h3>
      <p>Price: ${stock.price}</p>
      <button onClick={() => onBuyStock(stock)}>Buy</button>
    </div>
  );
}

export default Stock;

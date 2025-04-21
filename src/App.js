// src/App.js
import React, { useEffect, useState } from "react";
import StockContainer from "./components/StockContainer";  // Corrected path
import PortfolioContainer from "./components/PortfolioContainer";  // Corrected path
import SearchBar from "./components/SearchBar";  // Corrected path

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleBuyStock = (stock) => {
    if (!portfolio.find((item) => item.id === stock.id)) {
      setPortfolio([...portfolio, stock]); // Add stock to portfolio
    }
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id)); // Remove stock from portfolio
  };

  const handleSort = (value) => {
    setSortType(value);
  };

  const handleFilter = (value) => {
    setFilterType(value);
  };

  let displayedStocks = [...stocks];

  // Filter stocks based on selected type
  if (filterType !== "All") {
    displayedStocks = displayedStocks.filter((stock) => stock.type === filterType);
  }

  // Sort stocks alphabetically or by price
  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <SearchBar
        sortType={sortType}
        onSortChange={handleSort}
        filterType={filterType}
        onFilterChange={handleFilter}
      />
      <div className="row">
        <StockContainer stocks={displayedStocks} onBuyStock={handleBuyStock} />
        <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
      </div>
    </div>
  );
}

export default App;

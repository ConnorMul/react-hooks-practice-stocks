import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddToPortfolio }) {
  
  const mappedStocks = stocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        onStockClick={onAddToPortfolio}
      />
    )
  })
  
  return (
    <div>
      <h2>Stocks</h2>
      {mappedStocks}
    </div>
  );
}

export default StockContainer;

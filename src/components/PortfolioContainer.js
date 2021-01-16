import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onRemoveStock }) {
  
  const mappedPortfolio = portfolio.map((stock) => {
    return (
      <Stock 
        key={stock.id}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        onStockClick={onRemoveStock}
      />

    )
  })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedPortfolio}
    </div>
  );
}

export default PortfolioContainer;

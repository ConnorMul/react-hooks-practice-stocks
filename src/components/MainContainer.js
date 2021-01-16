import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks }) {
  const [inPortfolio, setInPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [type, setType] = useState("Tech")

  const filteredStocks = stocks.filter((stock) => 
    stock.type === type
  )
      const sortedStocks = filteredStocks.sort((stock1, stock2) => {
        if (sortBy === "Alphabetically") {
          return stock1.name.localeCompare(stock2.name)
        } else {
          return stock1.price - stock2.price
        }
      })

      function handleAddStock(stockToAdd) {
        const stockInPortfolio = inPortfolio.find(
          (stock) => stock.id === stockToAdd.id
        );
        if (!stockInPortfolio) {
          setInPortfolio([...inPortfolio, stockToAdd]);
        }
      }
    
      function handleRemoveStock(stockToRemove) {
        setInPortfolio((portfolio) =>
          portfolio.filter((stock) => stock.id !== stockToRemove.id)
        );
      }
  
  function handleAddToPortfolio(stock) {
    setInPortfolio(...inPortfolio, stock)
  }

  return (
    <div>
      <SearchBar 
        sortBy={sortBy}
        filterBy={type}
        onTypeSelection={setType} 
        onSortSelection={setSortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={sortedStocks}
            onAddToPortfolio={handleAddStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={inPortfolio}
            onRemoveStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

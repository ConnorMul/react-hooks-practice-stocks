import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(stocksObjs => setStocks(stocksObjs))
  }, [])

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks}/>
    </div>
  );
}

export default App;

import React from "react";

function Stock({ id, name, price, type, ticker, onStockClick }) {
  return (
    <div onClick={() => onStockClick({id, name, price, type, ticker})}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

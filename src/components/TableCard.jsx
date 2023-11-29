import React from "react";
import "../style/TableCard.css";

const TableCard = ({ chocolates, handleDelete }) => {
  const { _id, name, country, select } = chocolates;
  return (
    <div className="table-body">
      <div>
        <h6>{name}</h6>
      </div>

      <div>
        <h6>{country}</h6>
      </div>

      <div>
        <h6>{select}</h6>
      </div>
      <div className="action">
        <button onClick={() => handleDelete(_id)}>x</button>
        <h6>Update</h6>
      </div>
    </div>
  );
};

export default TableCard;

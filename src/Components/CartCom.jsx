import React from "react";
import data from "../data";
import "./CartCom.css";

function CarCom() {
  return (
    <div>
      <h1>Cars</h1>
      <div className="div">
        {data.map((car, index) => (
          <div className="carbox" key={index}>
            <img src={car.img} alt={car.name} />
            <h2>{car.name}</h2>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarCom;

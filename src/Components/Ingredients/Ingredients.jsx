import React from "react";
import "../Ingredients/ingredien.css"
export default function Ingredients() {
  return (
    <div className="All-ingredients">
      <div className="ingredient-pizza" >
        <div>
          <img className="img-tag"
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/ingrediants.svg"
            alt="Loading..."
          ></img>
        </div>
        <h5 className="text-tgg">Finest Ingredients</h5>
        <p className="parag">
          Made from the finest quality ingredients, to give you an authentic
          Italian taste, every single time
        </p>
      </div>
      <div  className="ingredient-pizza">
        <div >
          <img className="img-tag"
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/fresh-dough.svg"
            alt="Loading..."
          ></img>
        </div>
        <h5 className="text-tgg">Finest Ingredients</h5>
        <p className="parag">
          Our Pizza the finest quality ingredients, to give you an authentic
          Italian taste, every single time
        </p>
      </div>
      <div  className="ingredient-pizza">
        <div>
          <img className="img-tag"
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/safety-and-quality.svg"
            alt="Loading..."
          ></img>
        </div>
        <h5 className="text-tgg">Finest Ingredients</h5>
        <p className="parag">
          Our Kitchens the finest quality ingredients, to give you an authentic
          Italian taste, every single time
        </p>
      </div>
    </div>
  );
}

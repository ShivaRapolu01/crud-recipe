import React from 'react'
import Ingredient from './Ingredient';


export default function IngredientList({Ingredients}) {
    
    console.log("inside IngredientList => Ingredients  ",Ingredients)
 
    return (
        <div>
            { 
            Ingredients.map((ingredient)=>{
              return (
              <Ingredient key={ingredient.id} {...ingredient}/>
              )
            })
            }
        </div>
    )
}



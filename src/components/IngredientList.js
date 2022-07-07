import React from 'react'
import Ingredient from './Ingredient';


export default function IngredientList({Ingredients}) {
    
 
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



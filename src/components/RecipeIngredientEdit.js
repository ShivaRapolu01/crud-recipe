import React from 'react'
import '../css/recipeIngredientEdit.css'
export default function RecipeIngredientEdit({ingredient,handleIngredientChange,handleIngredientDelete}) {
  console.log("inside recipeingredientedit.js")
    console.log(ingredient.id);
    function handleChange(changes){
        handleIngredientChange(ingredient.id,{...ingredient,...changes});
    }
    
    return (
        <>
           <div className='Ingredientedit--grid'>
            <input className='recipe-edit__input' type="text" value={ingredient.name} onChange={(e)=>handleChange({name:e.target.value})}/>
            <input className='recipe-edit__input' type="text" value={ingredient.quantity} onChange={(e)=>handleChange({quantity:e.target.value})}/>
            <button className='btn btn--danger custom' onClick={()=>handleIngredientDelete(ingredient.id)}>&times;</button>
            </div>
        </>
    )
}

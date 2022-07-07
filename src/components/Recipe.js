import React,{useContext} from 'react'
import { RecipeContext } from './App';
import IngredientList from './IngredientList';

export default function Recipe(props) {
    const {id,recipeName,cookTime,servings,instructions,Ingredients}=props; 
    const {recipedelete,handleSelectedRecipe}=useContext(RecipeContext);
    return (
        <div className="recipe-card">
            <div className="recipe-card__header">
                <h3>{recipeName}</h3>
                <div>
                    <button className='btn btn--primary mr-1' onClick={()=>{handleSelectedRecipe(id)}}>Edit</button>
                    <button className='btn btn--danger' onClick={()=>recipedelete(id)}>Delete</button>
                </div>
            </div>
            <div>
                <span className="recipe-card__label">Cook Time:</span>
                <span  className="recipe-card__value">{cookTime}</span>
            </div>
            <div>
                <span className="recipe-card__label">Servings:</span>
                <span  className="recipe-card__value">{servings}</span>
            </div>
             <div>
                 <span className="recipe-card__label">Instructions: </span>
                 <div>
                     <div  className="recipe-card__value recipe-card__instructions">{instructions}</div>
                 </div>
             </div>
             <div>
                 <span className="recipe-card__label">Ingredients: </span>
                 <div  className="recipe-card__value">
                     <IngredientList Ingredients={Ingredients}/>
                 </div>
             </div>
            
        </div>
    )
}

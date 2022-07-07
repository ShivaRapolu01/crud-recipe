import React,{useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuid } from 'uuid';

export default function RecipeEdit({selectedRecipe}) {
    const {handleRecipeChange,handleSelectedRecipe}=useContext(RecipeContext);
    function handleChange(changes){
        handleRecipeChange(selectedRecipe.id,{...selectedRecipe,...changes} );
        //{...selectedRecipe,...changes}  we are overwritting the new changes with old recipe
    }

    function handleIngredientChange(id,changes){
      const newIngredients=[...selectedRecipe.Ingredients];
      const index=newIngredients.findIndex(i=>i.id===id);
      newIngredients[index]=changes;
      handleChange({Ingredients:newIngredients});
    }
    function handleIngredientAdd(){
        const newIngredient={
            id:uuid(),
            name:'',
            quantity:''

        }
        handleChange({Ingredients:[...selectedRecipe.Ingredients,newIngredient]});
    }
    function handleIngredientDelete(id){
        handleChange({Ingredients:selectedRecipe.Ingredients.filter(i=>i.id!==id)})
    }
    
    return (
        <div className="recipe-edit">
            <div className='close-button' >
                <button onClick={()=>handleSelectedRecipe(undefined)}>&times;</button>
            </div>
            <div className='recipe-edit__details-grid'>
                <label htmlFor="name" className='recipe-edit__label'>Name</label>
                {/* Normally in js, onChange triggers even when a single letter is changed , whereas onInput gets triggered only when all the changing is finished */
                // but in react onInput is binded  to onChange itself so using onChange is more prominent
                }
                <input  type="text" name="name" id="name"  className='recipe-edit__input' value={selectedRecipe.recipeName} onChange={e=>handleChange({recipeName:e.target.value})}/>
                <label htmlFor="cookTime" className='recipe-edit__label'>Cook Time</label>
                <input  type="text" name="cookTime" id="cookTime"  className='recipe-edit__input' value={selectedRecipe.cookTime} onChange={e=>handleChange({cookTime:e.target.value})}/>
                <label htmlFor="servings" className='recipe-edit__label'>Servings</label>
                <input  type="number" min="1" name="servings" id="servings"  className='recipe-edit__input' value={selectedRecipe.servings} onChange={e=>handleChange({servings:parseInt(e.target.value)||''})}/>
                <label className='recipe-edit__label'>Instructions</label>
                <textarea className='recipe-edit__input' name='Instructions' id='Instructions' value={selectedRecipe.instructions} onChange={e=>handleChange({instructions:e.target.value})}/>
            </div>
                <br/>
                <label className='recipe-edit__label'>Ingredients</label>
                <div className='recipe-edit__ingredient-grid'>
                    <div className='recipe-edit__ingredient-label '>Name</div>
                    <div  className='recipe-edit__ingredient-label '>Amount</div>
                </div>    
                    <div>
                            {selectedRecipe.Ingredients.map(ingredient=>(
                                            <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} handleIngredientChange={handleIngredientChange} handleIngredientDelete={handleIngredientDelete}/>

                            ))}
                   </div>

                
                
                <div className='recipe-edit__add-ingredient-btn-container'>
                    <button className="btn btn--primary" onClick={()=>handleIngredientAdd()}>Add Ingredients</button>
                </div>
        </div>
       
    )
}

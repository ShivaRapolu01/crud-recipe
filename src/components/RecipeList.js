import React,{useContext} from 'react'
import Recipe from './Recipe'
import  '../css/RecipeList.css'
import {RecipeContext} from './App';




export default function RecipeList(props) {
    // const {
    //     recipes,Addrecipe,recipedelete
    // }=props
    const {recipes}=props; 
    const {Addrecipe}=useContext(RecipeContext);

    return (
        <>
        <div className="recipe-list">
            <div>
              {recipes.map((recipe)=>{
                    return (<Recipe key={recipe.id} {...recipe} />)
                })}
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button className="btn btn--primary" onClick={Addrecipe}>Add recipe</button>
            </div>
        </div>
        </>
    )
}


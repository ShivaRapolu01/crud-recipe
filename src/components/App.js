import '../css/App.css';
import RecipeList from './RecipeList';
import React,{useState,useEffect} from 'react';
import RecipeEdit from './RecipeEdit';
import { v4 as uuid } from 'uuid';
const LOCAL_STORAGE_KEY="CRUD_recipe.App.recipes";
 export const RecipeContext=React.createContext();
function App() {
  const [selectedRecipeId,setSelectedRecipeId]=useState();
  const [recipes,setrecipes]=useState(RecipeArray);
   

  const selectedRecipe=recipes.find((recipe)=>recipe.id===selectedRecipeId);
  console.log(selectedRecipe);
  //elegant code to store data in localstorage
  useEffect(()=>{
    const recipeJSON=localStorage.getItem(LOCAL_STORAGE_KEY);
   if(recipeJSON!=null)setrecipes(JSON.parse(recipeJSON));
  },[])

  useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));//local storage only stores strings not javascript arrays/objects
  },[recipes]);
  const recipeContextValue={
    Addrecipe:Addrecipe,
    recipedelete, /*Shortcut for recipedelete:recipedelete */
    handleSelectedRecipe,
    handleRecipeChange
  }

  function handleSelectedRecipe(id){
      setSelectedRecipeId(id);
  }
   function Addrecipe(){
      console.log("Addrecipe() called");
      console.log(uuid());
      console.log(uuid());
      const newrecipe={ 
          id:uuid(),//id:uuid() provides unique id everytime
          recipeName:"",
          cookTime:"",
          servings:"",
          instructions:"",
          Ingredients:[
            {
              id:uuid(),
              name:'',quantity:''
            },{
              id:uuid(),
              name:'',quantity:''
            }
          ]
        }
        setSelectedRecipeId(newrecipe.id);
        setrecipes([...recipes,newrecipe]);
    }

    function handleRecipeChange(id,recipe){
      const newRecipes=[...recipes];//we can't directly change the state of recipes hence we use setrecipe
      const index=newRecipes.findIndex(r=>r.id===id);
      newRecipes[index]=recipe; 
      setrecipes(newRecipes);
    }

    function recipedelete(id){
        window.alert("deletes the recipe card permanently");
        if(selectedRecipeId!==null && selectedRecipeId===id){
          selectedRecipeId(undefined);//same as selectedRecipeId=undefined
        }
        setrecipes(recipes.filter(recipe=>recipe.id!==id))
    }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList 
    recipes={recipes}
    />
   {selectedRecipe && <RecipeEdit selectedRecipe={selectedRecipe}/>} 
    </RecipeContext.Provider>
  )
}

const RecipeArray=[
  {
      id:"1",
      recipeName:"Plain Chicken",
      cookTime:"1:45",
      servings:"3",
      instructions:"1.Put salt on chicken\n2.Put Chicken in oven\n3.Eat Chicken",
      Ingredients:[{id:"1",name:"chicken",quantity:"2 pounds"},{id:"2",name:"Salt", quantity:"1 Tbs"}]

  }, {
      id:"2",
      recipeName:"Plain Pork",
      cookTime:"1:05",
      servings:"1",
      instructions:"1.Put salt on Pork\n2.Put Pork in oven\n3.Eat Pork",
      Ingredients:[{id:"1",name:"Pork",quantity:"3 pounds"},{id:"2",name:"Paprika", quantity:"2 Tbs"}]


  }
];
export default App;

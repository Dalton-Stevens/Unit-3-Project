import { useState } from "react";
import RecipeCard from "../RecipeCard";
import classes from "./RecipeContainer.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({ recipes }) => {
  const [input, setInput] = useState("");

  const showRecipes = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let inputSearch = input.toLowerCase();
      return title.includes(inputSearch);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div className={classes.search_container}>
      <span className={classes.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Recipes"
        />
      </span>
      <div className={classes.recipe_container}>
        {showRecipes ? showRecipes : <h2>No recipes</h2>}
      </div>
    </div>
  );
};

export default RecipeContainer;

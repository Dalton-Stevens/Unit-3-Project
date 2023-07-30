import { useNavigate } from "react-router-dom";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className={classes.card_container}>
      <div>
        <div className={classes.img_container}>
          <img src={recipe.image_url} alt="recipe-img" />
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className={classes.card_btn} onClick={clickHandler}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;

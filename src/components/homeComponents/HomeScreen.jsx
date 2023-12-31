import React, { useState, useEffect } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeContainer from "./RecipeContainer";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  console.log(recipes);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
    </div>
  );
};

export default HomeScreen;

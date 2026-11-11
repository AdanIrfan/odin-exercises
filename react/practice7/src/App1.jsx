import { recipes } from "./data1.jsx";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((dish) => {
        return (
          <div key={dish.id}>
            <h2>{dish.name}</h2>
            <ul>
              {dish.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

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

export function Recipe({ id, name, ingredients }) {
  return (
    <section>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}

export function App() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}

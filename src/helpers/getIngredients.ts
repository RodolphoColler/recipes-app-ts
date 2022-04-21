export default function getIngredients(food: any) {
  const ingredients = [];
  const MAX_INGREDIENTS = 20;
  
  for (let i = 1; i <= MAX_INGREDIENTS; i += 1) {
    ingredients.push({
      name: food[`strIngredient${i}`],
      measure: food[`strMeasure${i}`],
      index: i,
    });
  }

  return ingredients.filter((ingredient) => ingredient.name);
}

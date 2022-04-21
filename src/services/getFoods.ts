import { IRequestParams, IRequestFilters } from '../interfaces/servicesInterfaces';
import { IFoodKeys } from '../interfaces/foodsInterfaces';

const filters: IRequestFilters = {
  searchByName: 'search.php?s=',
  searchByFirstLetter: 'search.php?f=',
  filterByIngredient: 'filter.php?i=',
  details: 'lookup.php?i=',
  categories: 'list.php?c=list',
  random: 'random.php',
};

async function getDetailedFoods(meals: IFoodKeys[]) {
  const URL_BASE = 'https://www.themealdb.com/api/json/v1/1/';  

  const detailedFoods = meals.map(async ({ idMeal }): Promise<IFoodKeys> => {
    const request = await fetch(`${URL_BASE}${filters.details}${idMeal}`);
    const { meals } = await request.json();
    return meals[0];
  });

  return await Promise.all(detailedFoods);
}

async function getFoods({ type, value }: IRequestParams) {
  const URL_BASE = 'https://www.themealdb.com/api/json/v1/1/';

  const request = await fetch(`${URL_BASE}${filters[type as keyof IRequestFilters]}${value}`);
  const { meals } = await request.json();

  if (!meals[0].strCategory) return await getDetailedFoods(meals);

  return meals;
}

export default getFoods;

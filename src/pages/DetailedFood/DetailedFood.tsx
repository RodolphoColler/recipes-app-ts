import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getIngredients from '../../helpers/getIngredients';
import getFoods from '../../services/getFoods';
import './DetailedFood.css';

type ParamsId = { id: string}

function DetailedFood() {
  const [food, setFood] = useState([]);
  const { id } = useParams<keyof ParamsId>() as ParamsId;

  useEffect(() => {
    getFoods({ type: 'details', value: id }).then((data) => setFood(data));
  }, []);

  return (
    <>
      {
        food.map(({ strMeal, strMealThumb, strInstructions }) => (
          <>
            <img src={ strMealThumb } alt={ strMeal} />
            <h1>{ strMeal }</h1>
            <p>{ strInstructions }</p>
            <ul>
              {
                getIngredients(food[0]).map((ingredient: any) => (
                  <li key={ ingredient.name } >
                    {ingredient.name}
                    -
                    {ingredient.measure}
                  </li>
                ))
              }
            </ul>
          </>
        ))
      }
    </>
  );
}

export default DetailedFood;

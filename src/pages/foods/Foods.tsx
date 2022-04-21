import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesAppContext from '../../context/RecipesAppContext';
import { IFoodKeys } from '../../interfaces/foodsInterfaces';

function Foods() {
  const { foods } = useContext(RecipesAppContext);

  return (
    <>
      {
        foods.map(({ idMeal, strMealThumb, strMeal, strCategory, strArea }: IFoodKeys)  => (
          <Link
            to={ `${idMeal}` }
            key={ idMeal }
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              width="150"
            />
            <p>{ strMeal }</p>
            <p>{ strCategory }</p>
            <p>{ strArea }</p>
          </Link>
        ))
      }
    </>
  );
}

export default Foods;

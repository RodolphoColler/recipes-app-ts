import { ReactNode, useEffect, useState } from 'react';
import getFoods from '../services/getFoods';
import RecipesAppContext from './RecipesAppContext';

type IRecipesAppContextProps = {
  children: ReactNode;
}

function RecipesAppProvider({ children }: IRecipesAppContextProps) {
  const [foodsRequest, setFoodsRequest] = useState({ type: 'searchByName', value: '' });
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods(foodsRequest).then((data) => setFoods(data));
  }, [foodsRequest]);

  return (
    <RecipesAppContext.Provider value={{ foodsRequest, setFoodsRequest, foods }}>
      {children}
    </RecipesAppContext.Provider>
  );
}

export default RecipesAppProvider;

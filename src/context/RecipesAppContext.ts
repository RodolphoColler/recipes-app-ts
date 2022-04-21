import { createContext } from 'react';
import { IRequestParams } from '../interfaces/servicesInterfaces';

interface context {
  foods: any;
  foodsRequest: IRequestParams;
  setFoodsRequest: (newState: IRequestParams) => void;
}

const INITIAL_CONTEXT = {
  foods: [],
  foodsRequest: { type: 'searchByName', value: '' },
  setFoodsRequest: () => null,
};

const RecipesAppContext = createContext<context>(INITIAL_CONTEXT);

export default RecipesAppContext;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
    tomatoes: 0.3,
    pickles: 0.5
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            };
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updIngr = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updIngrs = updateObject(state.ingredients, updIngr);
            const updSt = {
                ingredients: updIngrs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            };
            return updateObject(state, updSt);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    // added one by one to reach correct order
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    pickles: action.ingredients.pickles,
                    tomatoes: action.ingredients.tomatoes,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false,
                building: false
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
        default:
            return state;
    }
};

export default reducer;
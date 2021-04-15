import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from "./cart.actions";

// initial state
const INITIAL_STATE = {
  cartItem: [1, 2, 3],
  hidden: true,
};

// reducer function
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    default:
      return state;
  }
};

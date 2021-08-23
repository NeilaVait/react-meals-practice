import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// pagrindine reducer fn ===================================================
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // visa pridejimo i cart logika ir grazinti nauja state versija
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      // itemas jau yra, reikia padidint kieki
      const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === item.id);
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // itemo nera krepsely
        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE':
      throw new Error('remove item not completed');
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    // add to cart action
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;

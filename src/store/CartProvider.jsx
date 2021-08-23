import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// pagrindine reducer fn ===================================================
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      // visa pridejimo i cart logika ir grazinti nauja state versija
      const { item } = action;
      let updatedTotalAmount = state.totalAmount + item.price * item.amount;
      // 1a itemas jau yra, reikia padidint kieki
      // galima perdaryti i mondernesni varianta su find
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
        // 2a itemo nera krepsely
        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE':
      //surast itema su findu
      // if jei kiekis vienetas pasalinam,jei daugiau nuimam amount

      const existingCartItem = state.items.find((i) => i.id === action.id);

      let updatedItems;
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.amount > 1) {
        updatedItems = state.items.map((i) => {
          if (i.id === action.id) return { ...i, amount: i.amount - 1 };
          return i;
        });
      } else if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((i) => i.id !== action.id);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    // throw new Error('remove item not completed');
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

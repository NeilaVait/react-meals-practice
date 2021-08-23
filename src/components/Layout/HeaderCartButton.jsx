import classes from './HeaderCartButton.module.css';
import CartIcon from './../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // todo count all items quantities
  const numberOfCartItems = cartCtx.items.reduce((total, curObj) => total + curObj.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

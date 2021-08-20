import classes from './HeaderCartButton.module.css';
import CartIcon from './../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // todo count all items quantities
  const numberOfCartItems = cartCtx.items.length;

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

import classes from './HeaderCartButton.module.css';
import CartIcon from './../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBumpAdded, setBtnBumpAdded] = useState(false);

  // todo count all items quantities
  const numberOfCartItems = cartCtx.items.reduce((total, curObj) => total + curObj.amount, 0);

  const btnClasses = `${classes.button} ${btnBumpAdded ? classes.bump : ''}`;

  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnBumpAdded(true);
    const timerBump = setTimeout(() => {
      setBtnBumpAdded(false);
    }, 300);
    return () => {
      clearTimeout(timerBump);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

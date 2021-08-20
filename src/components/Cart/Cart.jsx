import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}

      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

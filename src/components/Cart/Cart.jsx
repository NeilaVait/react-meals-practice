import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} item={...item} />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}

      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>
          Close
        </button>
        {hasItems && <button className={classes['button']}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

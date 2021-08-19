import classes from './Cart.module.css';
import Modal from './../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return props.modalMode ? (
    <Modal handleCloseModal={props.handleCloseModal}>
      {cartItems}

      <div className={classes.total}>
        <span>Total amount</span>
        <span>$34.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.handleCloseModal} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  ) : null;
};

export default Cart;

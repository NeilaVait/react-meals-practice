import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
  return (
    <div className={classes['cart-item']}>
      <h3>{item.name}</h3>
      <span className={classes.price}>${item.price}</span>
      <span className={classes.amount}>x{item.amount}</span>
      <div className={classes['cart-item-buttons']}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItem;

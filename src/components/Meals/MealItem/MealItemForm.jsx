import { useState, useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from './../../UI/Input';
import CartContext from './../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const [formQty, setFormQty] = useState('1');

  const inputValueHandler = (event) => {
    setFormQty(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // isitikinti kad ivesta reiksme tarp 1 ir 5, netuscia ir siusti tik tada
    if (formQty.trim().length === 0 || +formQty < 1 || +formQty > 5) return;
    cartCtx.addItem({ id: 'c1', name: 'sushi', price: 12.99, amount: 2 });
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        onChange={inputValueHandler}
        value={formQty}
        label="Amount"
        input={{ id: 'amount_' + props.id, type: 'number', step: 1 }}
      />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

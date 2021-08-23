import { useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from './../../UI/Input';

const MealItemForm = (props) => {
  const [formQty, setFormQty] = useState('1');
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputValueHandler = (event) => {
    setFormQty(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setAmountIsValid(true);

    // isitikinti kad ivesta reiksme tarp 1 ir 5, netuscia ir siusti tik tada
    if (formQty.trim().length === 0 || +formQty < 1 || +formQty > 5) return setAmountIsValid(false);

    props.onAddItem(+formQty);
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        onChange={inputValueHandler}
        value={formQty}
        label="Amount"
        input={{ id: 'amount_' + props.id, type: 'number', step: 1 }}
      />
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

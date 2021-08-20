import classes from './Input.module.css';

const Input = ({ input, label, value, onChange }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input value={value} onChange={onChange} {...input} />
    </div>
  );
};

export default Input;

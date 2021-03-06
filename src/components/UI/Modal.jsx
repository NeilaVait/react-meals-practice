import reactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const poralEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, poralEl)}
      {/* <Backdrop /> */}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, poralEl)}
      {/* <ModalOverlay>{props.children}</ModalOverlay> */}
    </>
  );
};

export default Modal;

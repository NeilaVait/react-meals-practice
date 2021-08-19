import reactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.handleCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop handleCloseModal={props.handleCloseModal} />, portalEl)}
      {/* <Backdrop /> */}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
      {/* <ModalOverlay>{props.children}</ModalOverlay> */}
    </>
  );
};

export default Modal;

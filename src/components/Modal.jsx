/* eslint-disable react/prop-types */
const Modal = ({ message }) => {
  return (
    <div className="modal-background">
      <div id="confirmation" className="modal">
        {message}
      </div>
    </div>
  );
};

export default Modal;

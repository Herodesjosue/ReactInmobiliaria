import "../Estilos/Modal.css";
import { Button } from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <Button
          variant="dark"
          className="modal-close p-1 mt-2 me-2"
          onClick={closeModal}
          size="sm"
        >
          <CloseIcon/>
        </Button>{" "}
        {children}
      </div>
    </article>
  );
};

export default Modal;

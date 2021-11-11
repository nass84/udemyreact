import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br></br>
        <button className="modal-close" onClick={handleClose}>
          close
        </button>
      </div>
    </div>
  );
}

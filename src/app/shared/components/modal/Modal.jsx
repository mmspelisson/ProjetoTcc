import React from 'react';

const Modal = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Usuário cadastrado com sucesso!</p>
      </div>
    </div>
  );
}

export default Modal;

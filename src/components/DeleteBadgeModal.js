import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props) {
  return <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="DeleteBadgeModal">
      <h1>Estas seguro</h1>
      <p>Estas a punto de borrar este badge</p>
      <div>
        <div onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Borrar</div>
        <div onClick={props.onClose} className="btn btn-primary">Cancel</div>
      </div>
    </div>
  </Modal>
}

export default DeleteBadgeModal;
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

import { deleteConfirm } from "../../actions";

const InputModal = ({ modalProps, userList, closeModal, onDeleteConfirm }) => {
  const user = userList.find((u) => u.id === modalProps.user);
  return (
    <div className="modalWindow">
      <div className="dialog-modal">
        <i className="fas fa-times close-login" onClick={closeModal}></i>
        <h2>
          Are you sure you want to delete user - <b>{user.fullName}</b>?
        </h2>
        <div className="btn-wrapper">
          <Button onClick={onDeleteConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ modalProps, userList, form }) => ({
  modalProps,
  userList,
  form,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch("CLOSE_MODAL"),
  onDeleteConfirm: () => dispatch(deleteConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);

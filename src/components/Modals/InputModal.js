import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

import { saveUser } from "../../actions";

const InputModal = ({
  modalProps,
  closeModal,
  onChangeInput,
  onSaveUser,
  form,
  validErrors,
}) => {
  const [passwordInputType, setInputType] = useState(true);

  const errorListRender = (arr) => (
    <ul className="errors">
      {arr.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );

  return (
    <div className="modalWindow">
      <div className="input-modal">
        <Form>
          <Form.Group controlId="EmailControlInput">
            <Form.Label>Email</Form.Label>

            {validErrors.email && errorListRender(validErrors.email)}

            <Form.Control
              type="email"
              name="email"
              isInvalid={validErrors.email}
              value={form.email}
              onChange={(e) => onChangeInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="PasswordControlInput">
            <Form.Label>Password</Form.Label>

            {validErrors.password && errorListRender(validErrors.password)}
            <div className="inputWrapper">
              <Form.Control
                type={passwordInputType ? "password" : "text"}
                isInvalid={validErrors.password}
                name="password"
                value={form.password}
                onChange={(e) => onChangeInput(e.target)}
              />
              <i
                className="fas fa-eye"
                onClick={() => setInputType(!passwordInputType)}
              ></i>
            </div>
          </Form.Group>
          <Form.Group controlId="PhoneControlInput">
            <Form.Label>Phone</Form.Label>

            {validErrors.phone && errorListRender(validErrors.phone)}

            <Form.Control
              type="text"
              name="phone"
              value={form.phone}
              isInvalid={validErrors.phone}
              onChange={(e) => onChangeInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="NameControlInput">
            <Form.Label>Full Name</Form.Label>

            {validErrors.fullName && errorListRender(validErrors.fullName)}

            <Form.Control
              type="text"
              name="fullName"
              value={form.fullName}
              isInvalid={validErrors.fullName}
              onChange={(e) => onChangeInput(e.target)}
            />
          </Form.Group>
          <Form.Group controlId="StatusControlInput">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={form.status}
              onChange={(e) => onChangeInput(e.target)}
            >
              <option>Client</option>
              <option>Partner</option>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>
          <Button onClick={() => onSaveUser(modalProps && modalProps.user)}>
            {modalProps ? "Update User" : "Add User"}
          </Button>
          <i className="fas fa-times close-login" onClick={closeModal}></i>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ modalProps, userList, form, validErrors }) => ({
  modalProps,
  userList,
  form,
  validErrors,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch("CLOSE_MODAL"),
  onChangeInput: ({ value, name }) =>
    dispatch({ type: "CHANGE_INPUT", payload: { value, name } }),
  onSaveUser: (id) => dispatch(saveUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);

import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";

import WithFiltredList from "../hoc/withFiltredList";

const UserList = ({
  userList,
  onClickCreate,
  onClickUpdate,
  onClickDelete,
  onChangeInput,
  onChangeFilterStatus,
}) => {
  const renderTable = () => {
    return userList.map((user, idx) => {
      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.phone}</td>
          <td>{user.fullName}</td>
          <td>{user.status}</td>
          <td>{user.createdAt}</td>
          <td className="updated-td">{user.updatedAt}</td>
          <td className="controls">
            <i
              className="fas fa-pencil-alt"
              onClick={() => onClickUpdate(user.id)}
            ></i>
            <i
              className="fa fa-trash"
              onClick={() => onClickDelete(user.id)}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="UserListWrapper">
      <Container fluid>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              onChange={(e) => onChangeInput(e.target.value)}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone Number</th>
                  <th>Full Name</th>
                  <th>
                    <Form.Control
                      as="select"
                      onChange={(e) => onChangeFilterStatus(e.target.value)}
                    >
                      <option value={null}>Status</option>
                      <option value="Client">Client</option>
                      <option value="Partner">Partner</option>
                      <option value="Admin">Admin</option>
                    </Form.Control>
                  </th>
                  <th>Created</th>
                  <th className="updated-td">Updated</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </Table>
            <Button onClick={onClickCreate}>Add New User</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WithFiltredList(UserList);

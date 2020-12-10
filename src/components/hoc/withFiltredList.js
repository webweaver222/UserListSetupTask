import React from "react";
import { connect } from "react-redux";

import { createUser, updateUser, clickDelete } from "../../actions";

const mapStateToProps = ({ userList, searchTerm, filterStatus }) => ({
  userList,
  searchTerm,
  filterStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onClickCreate: () => dispatch({
    type: "SHOW_MODAL",
    payload: { modalType: "Input", modalProps: null },
  }),
  onClickUpdate: (id) => dispatch(updateUser(id)),
  onClickDelete: (id) => dispatch(clickDelete(id)),
  onChangeInput: (value) =>
    dispatch({ type: "CHANGE_SEARCH_TERM", payload: { value } }),
  onChangeFilterStatus: (value) =>
    dispatch({ type: "CHANGE_FILTER_STATUS", payload: { value } }),
});

const WithFiltredList = (Wrapped) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )((props) => {
    const { userList, searchTerm, filterStatus } = props;
    console.log(filterStatus);

    let filtredList = userList.filter((item) => {
      if (
        item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.phone.indexOf(searchTerm) > -1
      ) {
        return item;
      }
    });

    if (filterStatus !== "Status" && filterStatus !== "") {
      filtredList = filtredList.filter((item) => {
        if (item.status === filterStatus) return item;
      });
    }

    return <Wrapped {...props} userList={filtredList} />;
  });

export default WithFiltredList;

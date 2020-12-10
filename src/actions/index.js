import { mockUsers, getDateString } from "../utils";
import { updateList } from "../reducers/funcs";
import v from "../validator";

const mount = () => (dispatch) => {

  if(!localStorage.getItem("users")) mockUsers()

  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");


  return dispatch({ type: "EDIT_LIST", payload: { newList: storedUsers } });
};


const updateUser = (id) => async (dispatch, getState) => {
  dispatch({
    type: "SHOW_MODAL",
    payload: { modalType: "Input", modalProps: { user: id } },
  });

  const { modalProps, userList } = getState();
  const user = userList.find((u) => u.id === modalProps.user);

  Object.keys(user).forEach((prop) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { value: user[prop], name: prop },
    });
  });
};

const saveUser = (id) => (dispatch, getState) => {
  const {
    form: { email, password, phone, fullName, status },
  } = getState();

  v.validateEnter({
    email,
    password,
    phone,
    fullName,
    status,
  });

  if (Object.keys(v.errors).length > 0) {
    return dispatch({ type: "VALIDATION_FAIL", payload: { errors: v.errors } });
  }

  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

  const dateStr = getDateString();

  const userToUpdate = id ? storedUsers.find((u) => u.id === id) : null;

  const idxToUpdate = id
    ? storedUsers.findIndex((item) => item.id === id)
    : null;
console.log(idxToUpdate);
  const newUser = {
    id: userToUpdate
      ? userToUpdate.id
      : storedUsers.length > 0
      ? storedUsers[storedUsers.length - 1].id + 1
      : 1,
    email,
    password,
    phone,
    fullName,
    status,
    createdAt: userToUpdate ? userToUpdate.createdAt : dateStr,
    updatedAt: dateStr,
  };

  const newList = updateList(storedUsers, newUser, idxToUpdate);

  localStorage.setItem("users", JSON.stringify(newList));

  return dispatch({ type: "EDIT_LIST", payload: { newList } });
};

const clickDelete = (id) => (dispatch) => {
  return dispatch({
    type: "SHOW_MODAL",
    payload: { modalType: "Dialog", modalProps: { user: id } },
  });
};

const deleteConfirm = () => (dispatch, getState) => {
  const {
    modalProps: { user },
  } = getState();

  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const idxToDelete = storedUsers.findIndex((item) => item.id === user);

  const newList = updateList(storedUsers, "remove", idxToDelete);

  localStorage.setItem("users", JSON.stringify(newList));

  return dispatch({ type: "EDIT_LIST", payload: { newList } });
};

export { mount, updateUser, saveUser, clickDelete, deleteConfirm };

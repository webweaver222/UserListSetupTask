const initState = {
  userList: [],
  searchTerm: "",
  filterStatus: "",
  modalType: null,
  modalProps: {},
  form: {
    email: "",
    password: "",
    phone: "",
    fullName: "",
    status: "Client",
  },
  validErrors: {},
};

const reducer = (state, action) => {
  if (typeof state === "undefined") return initState;

  switch (action.type) {
    case "EDIT_LIST": {
      return {
        ...state,
        userList: action.payload.newList,
        form: initState.form,
        modalType: initState.modalType,
        modalProps: initState.modalProps,
        validErrors: {},
      };
    }

    case "VALIDATION_FAIL": {
      return {
        ...state,
        validErrors: action.payload.errors,
      };
    }

    case "SHOW_MODAL": {
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
        form: initState.form,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        modalType: initState.modalType,
        modalProps: initState.modalProps,
        validErrors: initState.validErrors,
      };
    }

    case "CHANGE_INPUT": {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case "CHANGE_SEARCH_TERM": {
      return {
        ...state,
        searchTerm: action.payload.value,
      };
    }

    case "CHANGE_FILTER_STATUS": {
      return {
        ...state,
        filterStatus: action.payload.value,
      };
    }

    default:
      return state;
  }
};

export default reducer;

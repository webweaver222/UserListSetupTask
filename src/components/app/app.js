import React, { useEffect } from "react";
import { connect } from "react-redux";

import WithModal from "../hoc/withModal";
import UserList from "../UserList";
import bgc from "../../resources/svg/background.html";

import { mount } from "../../actions";

const App = ({ modalType, mount }) => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <div className="app">
      <WithModal modalType={modalType}>
        <UserList />
      </WithModal>
      <div className="background" dangerouslySetInnerHTML={{ __html: bgc }} />
    </div>
  );
};

export default connect(
  ({ modalType }) => ({ modalType }),
  (dispatch) => {
    return {
      mount: () => dispatch(mount()),
    };
  }
)(App);

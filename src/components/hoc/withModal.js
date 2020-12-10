import React from "react";

import InputModal from "../Modals/InputModal";
import DialogModal from "../Modals/DialogModal";

const modals = {
  Input: InputModal,
  Dialog: DialogModal,
};

const WithModal = ({ modalType, children }) => {
  const Modal = modalType && modals[modalType];
  const shading = modalType && <div className="shading"></div>;

  return (
    <div className="withModal">
      {Modal && <Modal />}
      {shading}
      {children}
    </div>
  );
};

export default WithModal;

import { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";
import Btn from "../Components/Btn";

import "./AddNewResourceModel.css";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
    width: "40vw",
    maxHeight: "80vh",
  },
};

Modal.setAppElement("#root");

const AddNewResourceModel = ({ modalIsOpen, setIsOpen, setResources }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const [newResourceName, setNewResourceName] = useState("");

  const addNewResource = () => {
    if (newResourceName === "") {
      toast.error("Resource name cannot be empty!");
      return;
    }

    setResources((curr) => [...curr, newResourceName]);
    toast.success("New resource added successfully!");
    setNewResourceName("");
    closeModal();
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      addNewResource();
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="AddNewResource">
        <div className="modelHead">
          <h2>Add New Resource</h2>
          <AiFillCloseSquare className="closeIcon" onClick={closeModal} />
        </div>

        <div className="inpFieldCom">
          <label>Enter the resource name</label>
          <input
            type="text"
            autoFocus
            placeholder="Add New Resource..."
            value={newResourceName}
            onKeyDown={keyPress}
            onChange={(e) => setNewResourceName(e.target.value)}
          />
        </div>

        <Btn Text="Add" fontSize={13} onClick={addNewResource} />
      </div>
    </Modal>
  );
};

export default AddNewResourceModel;

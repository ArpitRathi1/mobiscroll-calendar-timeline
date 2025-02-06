import { useEffect, useRef, useState } from "react";
import "./ResourceSideBar.css";
import { FaPlusSquare } from "react-icons/fa";
import AddNewResourceModel from "../Models/AddNewResourceModel";

const initResources = [
  "Resource 1",
  "Resource 2",
  "Resource 3",
  "Resource 4",
  "Resource 5",
];

const ResourceSideBar = ({ setRowsColumnCount }) => {
  const [resources, setResources] = useState([]);

  // Element of the Resource Column
  const columnRef = useRef(null);

  // Disabling vertical scroll of the component
  useEffect(() => {
    const handleScroll = () => {
      if (columnRef.current) {
        columnRef.current.style.transform = `translateX(${window.scrollX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const LocalResources = JSON.parse(
      window.sessionStorage.getItem("resources")
    );

    if (LocalResources && LocalResources.length > 0) {
      setResources(LocalResources);
    } else {
      setResources(initResources);
    }
  }, []);

  useEffect(() => {
    setRowsColumnCount((curr) => {
      return { ...curr, rows: resources.length };
    });

    if (resources.length > 0) {
      window.sessionStorage.setItem("resources", JSON.stringify(resources));
    }
  }, [resources, setRowsColumnCount]);

  // AddNewResourceModel useState
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div ref={columnRef} className="ResourceSideBar">
      <AddNewResourceModel
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setResources={setResources}
      />

      {resources.map((resource, i) => {
        return (
          <div key={i} className="resource">
            {resource}
          </div>
        );
      })}

      <div className="addBtn">
        <FaPlusSquare onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

export default ResourceSideBar;

import "./Calender.css";
import React, { useState } from "react";
import TopMonthBar from "../Components/TopMonthBar";
import TopDateBar from "../Components/TopDateBar";
import ResourceSideBar from "../Components/ResourceSideBar";
import EventsTable from "../Components/EventsTable";

const Calender = () => {
  const [rowsColumnCount, setRowsColumnCount] = useState({
    rows: 0,
    columns: 0,
  });

  return (
    <div>
      <TopMonthBar />

      <div className="Container">
        <div className="firstColumn"></div>
        <TopDateBar setRowsColumnCount={setRowsColumnCount} />
        <ResourceSideBar setRowsColumnCount={setRowsColumnCount} />
        <EventsTable rowsColumnCount={rowsColumnCount} />
      </div>
    </div>
  );
};

export default Calender;

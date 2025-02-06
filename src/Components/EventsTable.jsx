import React, { useEffect, useState } from "react";
import "./EventsTable.css";
import { locateYpos } from "../Helpers/locateYPos";
import { generateUniqueColor, generateUniqueId } from "../Helpers/genUnique";
import Events from "./Events";

const EventsTable = ({ rowsColumnCount }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [CurrentEventEle, setCurrentEventEle] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [events, setEvents] = useState([]);

  const handleMouseDown = (e) => {
    e.preventDefault();

    const isAlreadyAnEventExist =
      e.target.parentElement.className.includes("event") ||
      e.target.className.includes("event");

    if (!isAlreadyAnEventExist) {
      setIsDragging(true);

      const newEvent = {
        pos: {
          x: e.pageX - 150,
          y: locateYpos(e.pageY - 80, rowsColumnCount.rows),
        },
        width: 2,
        color: generateUniqueColor(),
        id: generateUniqueId(),
        index: events.length + 1,
      };

      setCurrentEventEle(newEvent);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setCurrentEventEle((curr) => {
        let width = e.pageX - 150 - curr.pos.x;

        if (e.pageX - 150 > rowsColumnCount.columns * 80) {
          width = rowsColumnCount.columns * 80 - curr.pos.x;
        }

        return { ...curr, width };
      });
    }
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      setIsDragging(false);

      const newEventELe = CurrentEventEle;

      let width = e.pageX - 150 - CurrentEventEle.pos.x;

      if (e.pageX - 150 > rowsColumnCount.columns * 80) {
        width = rowsColumnCount.columns * 80 - CurrentEventEle.pos.x;
      }

      newEventELe.width = width;

      setEvents((curr) => {
        return [...curr, newEventELe];
      });

      setCurrentEventEle(null);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const LocalEvents = JSON.parse(window.sessionStorage.getItem("events"));

    if (LocalEvents && LocalEvents.length > 0) {
      setEvents(LocalEvents);
    }
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      window.sessionStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  return (
    <div className="EventTable" onMouseDown={handleMouseDown}>
      {Array(rowsColumnCount.rows)
        .fill(1)
        .map((row, i) => {
          return (
            <div
              key={i}
              className="row"
              style={{ width: `${rowsColumnCount.columns * 80}px` }}
            >
              {Array(rowsColumnCount.columns)
                .fill(1)
                .map((column, i) => {
                  return <div key={i} className="column"></div>;
                })}
            </div>
          );
        })}

      <Events
        selectedEventId={selectedEventId}
        CurrentEventEle={CurrentEventEle}
        events={events}
        setEvents={setEvents}
        setSelectedEventId={setSelectedEventId}
        rows={rowsColumnCount.rows}
      />
    </div>
  );
};

export default EventsTable;
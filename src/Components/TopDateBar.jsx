import { useEffect, useRef, useState } from "react";
import "./TopDateBar.css";
import { getCurrentDayAndWeekday, getDaysInCurrentMonth } from "../Helpers/date";

const TopDateBar = ({ setRowsColumnCount }) => {
  const [dates, setDates] = useState([]);
  const [currDate, setCurrDate] = useState("");

  const currDateColumnRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      currDateColumnRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    };

    window.addEventListener("load", scroll);

    const fetchedDates = getDaysInCurrentMonth();

    // Setting grid column based on the numbers of days in the month
    setRowsColumnCount((curr) => {
      return { ...curr, columns: fetchedDates.length };
    });

    setDates(fetchedDates);

    const currentDate = getCurrentDayAndWeekday();

    setCurrDate(currentDate);

    return () => {
      window.removeEventListener("load", scroll);
    };
  }, []);

  const elementRef = useRef(null);

  // Disabling vertical scroll of the component
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = `translateY(${window.scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="TopDateBar" ref={elementRef}>
      {dates.map((date, i) => (
        <div key={i} className="column">
          {date === currDate ? (
            <span ref={currDateColumnRef} className="active">
              {date}
            </span>
          ) : (
            <span>{date}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopDateBar;

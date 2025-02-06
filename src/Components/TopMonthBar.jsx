import { useEffect, useState } from "react";
import "./TopMonthBar.css";
import { getCurrentMonthAndYear } from "../Helpers/date";

const TopMonthBar = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    const { currentMonth, currentYear } = getCurrentMonthAndYear();

    setCurrentMonth(currentMonth);
    setCurrentYear(currentYear);
  }, []);

  return (
    <div className="TopMonthBar">
      <div>
        {currentMonth} {currentYear}
      </div>
      <div> {`< Today >`} </div>
    </div>
  );
};

export default TopMonthBar;
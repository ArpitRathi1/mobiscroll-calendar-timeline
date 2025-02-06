export const getCurrentMonthAndYear = () => {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = monthNames[date.getMonth()];
    const currentYear = date.getFullYear();
  
    return { currentMonth, currentYear };
  };
  
  // Array of weekday names
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  export const getDaysInCurrentMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
  
    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Array to store the formatted date strings
    const daysArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const dayName = weekdayNames[currentDate.getDay()];
      daysArray.push(`${day} ${dayName}`);
    }
  
    return daysArray;
  };
  
  export const getCurrentDayAndWeekday = () => {
    const date = new Date();
    const day = date.getDate();
  
    // Get the abbreviated day of the week
    const dayName = weekdayNames[date.getDay()];
  
    // Format the date as '1 Wed'
    return `${day} ${dayName}`;
  };
  
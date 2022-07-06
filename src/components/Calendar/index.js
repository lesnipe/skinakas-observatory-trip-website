import React from "react";
import Calendar from "react-calendar";
import { CalendarContainer, CalendarWrapper } from "./CalendarElements";
import "react-calendar/dist/Calendar.css";

const CalendarCustom = () => {
  return (
    <>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </>
  );
};

export default CalendarCustom;

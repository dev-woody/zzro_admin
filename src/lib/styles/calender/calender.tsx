import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";

interface CellsProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

const CalenderBlock = styled.div`
  display: flex;
  flex-direction: column;

  .btn:hover {
    cursor: pointer;
  }

  table {
    margin: 1rem 0;
    border-collapse: collapse;
    box-sizing: border-box;
    border: 1px solid var(--cus-color-border);
  }

  th {
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0.5rem 0;
    text-align: center;
    background-color: var(--cus-color-bg-layout);
    border: 1px solid var(--cus-color-border);
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
  }

  th:first-child,
  td:first-child {
    color: var(--cus-color-error-text);
  }

  th:last-child,
  td:last-child {
    color: var(--cus-color-primary-text);
  }

  td {
    font-size: 0.75rem;
    border: 1px solid var(--cus-color-border);
    /* text-align: center; */
  }

  .disabled,
  .disabled > div {
    color: var(--cus-color-text-quaternary) !important;
  }
`;

const DayItems = styled.div`
  min-height: 2rem;
  padding: 0.25rem 0.5rem;
  color: #000;
`;

const RenderCells = ({
  currentMonth,
  selectedDate,
  onDateClick,
}: CellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows: any[] = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <td
          className={`${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          // key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <div
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
            style={{ padding: "0.25rem 0.5rem" }}
          >
            {formattedDate}
          </div>
          <DayItems>일정</DayItems>
        </td>
      );
      day = addDays(day, 1);
    }
    rows.push(<tr className={`${day}`}>{days}</tr>);
    days = [];
  }
  return <tbody>{rows}</tbody>;
};

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <CalenderBlock>
      <div style={{ margin: "0 auto", display: "flex" }}>
        <FaAngleLeft className="btn" onClick={preMonth} />
        <span style={{ margin: "0 1rem", lineHeight: "1.2" }}>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </span>
        <FaAngleRight className="btn" onClick={nextMonth} />
      </div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </table>
    </CalenderBlock>
  );
};

export default Calender;

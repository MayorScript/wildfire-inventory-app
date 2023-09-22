// components/DateSelector.tsx
import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

interface DateSelectorProps {
  onDateChange: (selectedDate: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange }) => {
  const handleDateChange = (date: any) => {
    if (date) {
      onDateChange(dayjs(date).format("MMM, YYYY"));
    }
  };

  const disabledDate = (date: any) => {
    return date.isAfter(dayjs(new Date()).format("MMM, YYYY"), "month"); // Disable dates after the current month
  };

  return (
    <div className="pb-5">
      <DatePicker
        picker="month"
        onChange={handleDateChange}
        defaultValue={dayjs(new Date())}
        disabledDate={disabledDate}
      />
    </div>
  );
};

export default DateSelector;

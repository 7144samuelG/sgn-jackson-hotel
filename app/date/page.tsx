"use client"
import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const DatePickerFunction=()=>{
  const [value, setStartDate] = useState<any>(new Date());
console.log(value,"good")
  return (
    <div className=' text-white '>
      <DatePicker minDate={new Date()} onChange={ setStartDate} value={value} />
    </div>
  );
}
export default DatePickerFunction;
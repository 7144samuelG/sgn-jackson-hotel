import React, { useState } from 'react';
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
// const DatePickerFunction=()=>{
//   const [value, setStartDate] = useState<Date>(new Date());

//   return (
//     <div>
//       <DatePicker onChange={ setStartDate} value={value} />
//     </div>
//   );
// }
// export default DatePickerFunction;
const DatePickerFunction=()=>{
  return(
    <div>
      <input type="date"/>
    </div>
  )
}
export default DatePickerFunction;
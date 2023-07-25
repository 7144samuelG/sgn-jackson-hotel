
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const App = () => {
  // define check-in and check-out state
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="input-container flex">
      <div>
        <label>Check-in</label>
        
        <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
      </div>
      <div>
        <label>Check-out</label>
        
        <DatePicker  minDate={new Date()} closeCalendar={false} onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default App;

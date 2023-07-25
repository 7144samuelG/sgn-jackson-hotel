import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const DateRangePickerStyled = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}));

const DateRangePicker = (props: DateRangePickerProps) => {
    const { value, onChange, ...rest } = props;
    const [startDate, setStartDate] = React.useState(0);
    const [endDate, setEndDate] = React.useState(0);
    const [datesPicked, setDatesPicked] = React.useState(0);

    return (
        <DateRangePickerStyled>
            <DatePicker
                value={new Date()}
                minDate={startDate}
                onChange={(date: any) => {
                    setDatesPicked(datesPicked + 1);
                    if (datesPicked % 2 !== 0) {
                        setEndDate(date.$D);
                    } else {
                        setStartDate(date.$D);
                        setEndDate(0);
                    }
                }}
                closeOnSelect={false}
                renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                        !DayComponentProps.outsideCurrentMonth &&
                        Array.from(
                            { length: endDate - startDate + 2 },
                            (x, i) => i + startDate - 1
                        ).indexOf(day.date()) > 0;
                    return (
                        <div
                            style={
                                isSelected
                                    ? {
                                            backgroundColor: 'blue',
                                      }
                                    : {}
                            }
                            key={day.toString()}
                        >
                            <PickersDay {...DayComponentProps} />
                        </div>
                    );
                }}
                {...rest}
            />
        </DateRangePickerStyled>
    );
};

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState<DateRangePickerValueType | null>(
        null
    );

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue as DateRangePickerValueType);
                }}
                renderInput={(params: TextFieldProps) => (
                    <TextField {...params} />
                )}
            />
        </LocalizationProvider>
    );
}

type DateRangePickerValueType = {
    start: unknown;
    end: unknown;
};

interface DateRangePickerProps
    extends Omit<DatePickerProps<unknown, unknown>, 'value'> {
    value: DateRangePickerValueType | null;
}
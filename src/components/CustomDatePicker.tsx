import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

// Import react-datepicker styles
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      customInput={<Input type="text" placeholder="Select date" />}
    />
  );
}

export default CustomDatePicker;

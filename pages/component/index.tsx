import Calender from "./calender"
import Input from "./input"
import { useState, useEffect } from 'react'


const DatePicker = () => {
  const [selectedTime, setSelectedTime] = useState(undefined);

    return (
        <>
          <div>this is where i manager state</div>
          <Input/>
          <Calender selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
        </>
      )
}

export default DatePicker
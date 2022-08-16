import Calender from "./calender"
import Input from "./input"
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'


const DatePicker = () => {
  const [selectedTime, setSelectedTime] = useState(dayjs());
  useEffect(()=>{
    const now = dayjs();
    setSelectedTime(now)
  },[])
    return (
        <>
          <div> 🥱 🥱 🥱 </div>
          <Input selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
          <Calender selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
        </>
      )
}

export default DatePicker
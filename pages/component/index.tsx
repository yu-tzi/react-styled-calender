import Calender from "./calender"
import Input from "./input"
import { useState, useEffect } from 'react'


const DatePicker = () => {
  const [defautTime, setDefaultTime] = useState(null);

    return (
        <>
          <div>this is where i manager state</div>
          <Input/>
          <Calender defautTime={defautTime} setDefaultTime={setDefaultTime}/>
        </>
      )
}

export default DatePicker
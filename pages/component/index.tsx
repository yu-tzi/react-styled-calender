import Calender from "./calender"
import Input from "./input"
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

// setting dayjs plugin
var toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)

const DatePicker = () => {
  const [defautTime, setDefaultTime] = useState(null);
  useEffect(()=>{
    // @ts-ignore: Unreachable code error
    const now = dayjs().toObject();
    setDefaultTime(now)
  },[])

    return (
        <>
          <div>this is where i manager state</div>
          <Input/>
          <Calender defautTime={defautTime} setDefaultTime={setDefaultTime}/>
        </>
      )
}

export default DatePicker
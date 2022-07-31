import dayjs from 'dayjs'
import { useEffect } from 'react'

// setting dayjs plugin
var toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)


const Calender = (props) => {
    const { defautTime, setDefaultTime } = props
    const { years, months, date } = defautTime || {}
    const firstDay = dayjs().startOf('month').day()
    const lastDate = dayjs().endOf('month').date()
    const weekList = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]
    const monthDay = []
    for(let i=1; i <= firstDay + lastDate; i++){
        if(i <= firstDay){
            monthDay.push(0);
        }else{
            monthDay.push(i - firstDay);
        }
    }

    useEffect(()=>{
        // @ts-ignore: Unreachable code error
        const now = dayjs().toObject();
        setDefaultTime(now)
      },[])

    return(
        <>
            <div>{`${years} 年 ${months} 月`}</div>
            <div>
                {weekList.map((day)=>{
                    return(
                        <div key={`day-key-${day}`}>{day}</div>
                    )
                })}
                {monthDay.map((date, index)=>{
                    return(
                        <div key={`date-key-${index}`}>{date}</div>
                    )
                })}
            </div>
        </>
    )
}
export default Calender
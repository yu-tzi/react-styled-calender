import dayjs from 'dayjs'
import { useEffect } from 'react'
import styled from 'styled-components'


// setting dayjs plugin
var toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)

const Block = styled.div`
    color: blue;
    border: 1px solid blue;
    background-color: ${props=>props.color};
`
const BlockContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
`

const Calender = (props) => {
    const { selectedTime, setSelectedTime } = props
    const month = selectedTime ? selectedTime?.month() + 1  : undefined// month 從 0 開始算
    const years = selectedTime?.year()
    const date = selectedTime?.date()
    const firstDay = selectedTime?.startOf('month').day() 
    const lastDate = selectedTime?.endOf('month').date()
    const lastDay = selectedTime?.endOf('month').day() 
    const weekList = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]
    const monthDay = []
    for(let i=1; i < firstDay + lastDate + (7-lastDay); i++){
        if(i <= firstDay){
            monthDay.push("");
        }else if(i <= lastDate + firstDay){
            monthDay.push(i - firstDay);
        }else{
            monthDay.push("");
        }
    }

    const validDateClick = (index) => {
        if(index !== ''){
            const newDay = selectedTime.date(index)
            setSelectedTime(newDay) 
        }
    }

    const addMonthClick = () => {
        const newDay = selectedTime.add(1, 'month')
        setSelectedTime(newDay) 
    }

    const minusMonthClick = () => {
        const newDay = selectedTime.subtract(1, 'month')
        setSelectedTime(newDay) 
    }

    return(
        <>
            <div>{` NOW SELECT ${years}/${month}/${date}`}</div>
            <div>{`${years} 年 ${month} 月`}</div>
            <button onClick={minusMonthClick}>{`<`}</button>
            <button onClick={addMonthClick}>{`>`}</button>
            <BlockContainer>
                {weekList.map((day)=>{
                    return(
                        <Block key={`day-key-${day}`}>{day}</Block>
                    )
                })}
                {monthDay.map((dateDisplay, index)=>{
                    return(
                        <Block key={`date-key-${index}`} 
                            color={date === dateDisplay ? "yellow":"white"}
                            onClick={() => {validDateClick(dateDisplay)}}
                        >
                            {dateDisplay}
                        </Block>
                    )
                })}
            </BlockContainer>
        </>
    )
}
export default Calender
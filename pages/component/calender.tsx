import dayjs from 'dayjs'
import { useEffect } from 'react'
import styled from 'styled-components'


// setting dayjs plugin
var toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)



const Calender = (props) => {
    const { defautTime, setDefaultTime } = props
    const { years, months, date } = defautTime || {}
    const firstDay = dayjs().startOf('month').day() + 1
    const lastDate = dayjs().endOf('month').date()
    const lastDay = dayjs().endOf('month').day() + 1
    const weekList = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]
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

    const Block = styled.div`
        color: blue;
        border: 1px solid blue;
        background-color: ${props=>props.color};
    `
    const BlockContainer = styled.div`
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
    `
    const validClick = (index) => {
        console.log(`i am click ${index}`)
        if(index !== ''){
            const newDay = dayjs().date(index).toObject()
            console.log(newDay);
           // 把初始值跟選擇值 bind 起來
        }
    }

    useEffect(()=>{
        // @ts-ignore: Unreachable code error
        const now = dayjs().toObject();
        console.log(now)
        setDefaultTime(now)
      },[])

    return(
        <>
            <div>{`${years} 年 ${months} 月` /*左右按鈕*/}</div>
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
                            onClick={() => {validClick(dateDisplay)}}
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
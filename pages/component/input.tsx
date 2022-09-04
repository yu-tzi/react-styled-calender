import { useState, useEffect } from 'react'
import dayjs from 'dayjs'


const Input = (props) => { 
    const { selectedTime, setSelectedTime } = props;  
    const [ inputValue, setInputValue ] =  useState(selectedTime);
    const getValidationDate = () => {  
        // input value 轉換成合格的時間格式
        // 容許的輸入格式：'YYYY/MM/DD', 
        // 不容許的輸入格式 => 給 default 值
        const validValue = inputValue
        // setSelectedTime(validValue);
    }

    useEffect(() => {
        const formatedSelectTime = selectedTime.format('YYYY/MM/DD');
        setInputValue(formatedSelectTime)
    },[selectedTime]);

    return(
        <>
            <input type="text" 
                value={inputValue}
                onBlur={()=>{ getValidationDate()}}
                onKeyUp={(e)=>{ 
                    if (e.key === 'Enter' || e.keyCode === 13){
                        getValidationDate()}
                    }
                }
                onChange={(e)=>{setInputValue(e.target.value)}}
                
            />
        </>
    )
}
export default Input
import { useState, useEffect } from 'react'


const Input = (props) => { 
    // input 框
    // 接收 input 框的值的地方
    // 把 input 值轉換成正確 day 格式顯示在框框裡（輸入完 enter 或者按空白處）
    // 把正確的 day 格式傳送給 state
    // 把 state 顯示在 input 框上
    const { selectedTime, setSelectedTime } = props;  
    const [ inputValue, setInputValue ] =  useState(null);
    console.log(inputValue)
    const getValidationDate = () => {  
        console.log(inputValue)
        // input value 轉換成合格的時間格式
        const validValue = inputValue
        console.log(validValue)
        // setSelectedTime(validValue);
    }
        
    

    return(
        <>
            <input type="text" 
                value={inputValue || selectedTime}
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
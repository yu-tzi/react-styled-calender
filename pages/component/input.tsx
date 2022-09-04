import { useState, useEffect } from 'react'
import dayjs from 'dayjs'


const Input = (props) => {
    const { selectedTime, setSelectedTime } = props;
    const [inputValue, setInputValue] = useState(selectedTime);


    const getSplitStr = (str, eleArr) => {
        // 改用 reduce 直接判斷 ele 是否為 num? 
        for(let i=0; i< str.length; i++){
            if ((str.includes(eleArr[i]))) {
                return str.split(eleArr[i]);
            }
        }
    }

    const parseValiateData = () => {
        // 尋找把日期變成 string 的其他方式（現在會殘留 "" 在上面）
        const inputValueStr = JSON.stringify(inputValue);
        const validSymbol = ['/', '／', '-', '.'];
        const splitStr = getSplitStr(inputValueStr, validSymbol)

        // 容許的輸入格式：'YYYY/MM/DD', 'DD/MM/YYYY', '6/5/2019', '1/23/2019', '40/12/2019', '2022／03／04', '2022-04-03', '2022.03.04', 年份最大值是？
        // 不容許的輸入格式：
        /*
        使用特定字元把字串切分成一塊一塊，年份 月份 日期分開計算，字元合法(isNum)嗎？ no => 給 default 值
        字元調整完成後，重組成合格的形式，並 setSelectedTime(validValue) => validValue 需要是一個 dayjs 物件
        selectedTime 的改變驅動 calender 的調整
        */
        // return dayjs()
    }
    const getValidationDate = () => {
        parseValiateData()
        // const validValue = parseValiateData() || dayjs()
        // setSelectedTime(validValue);
    }

    useEffect(() => {
        const formatedSelectTime = selectedTime.format('YYYY/MM/DD');
        setInputValue(formatedSelectTime)
    }, [selectedTime]);

    return (
        <>
            <input type="text"
                value={inputValue}
                onBlur={() => { getValidationDate() }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter' || e.keyCode === 13) {
                        getValidationDate()
                    }
                }
                }
                onChange={(e) => { setInputValue(e.target.value) }}

            />
        </>
    )
}
export default Input
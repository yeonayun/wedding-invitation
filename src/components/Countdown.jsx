import { useState, useEffect } from "react";

function Countdown(){
    const [dayLeft, setDayLeft] = useState(0)

    useEffect(()=>{
        const today = new Date() //날짜랑 시간 다루는 객체
        const targetDate = new Date('2034-11-30')
        const diff = targetDate-today

        const remaining = Math.ceil(diff/(1000*60*60*24))
        setDayLeft(remaining)
    },[]) // [] = 의존성 배열, 안에 있는 값이 바뀔때마다 실행, 안 쓰면 모든 랜더링마다 실행

    return(
        <div>
            {/* <h2>연아윤 ♡ 전영호 님의 결혼식</h2> */}
            <p>연아윤 ♡ 전영호 님의 결혼식 {dayLeft}일전</p>
        </div>
    )
} export default Countdown
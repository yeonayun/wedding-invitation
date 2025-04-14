function Invitation(){
    const handleClick=()=>{
        alert("축하해주셔서 감사합니다.")
    }

    return(
        <div>
        <h2>Invitation</h2>
        <p>
        겨울로 가는 길목에서,<br/>
        <br/>
        2024년 11월 30일,<br/>
        우리의 첫 만남이 따스한 인연이 되었습니다.<br/>
        그리고 7년이 흐른 오늘, 2030년 11월 30일, 그 인연을 영원한 사랑으로 맺으려 합니다.<br/>
        <br/>
        소중한 여러분을 모시고 우리의 사랑과 약속을 나누고자 합니다.<br/>
        함께해 주셔서 따뜻한 축복과 격려로 이 순간을 더욱 빛내 주시면 감사하겠습니다.<br/>
        <br/>
        </p>

        <div>
            <p>신부 <strong>전영호</strong></p>
            <p>신부 <strong>연아윤</strong></p>
        </div>

        <button onClick={handleClick}>축하하기</button>
    </div>
    )
} export default Invitation
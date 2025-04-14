function Gallery(){
    const images=[
        "/image2.jpg",
        "/image1.jpg",
        "/image4.jpg"
    ]

    return(
        <div>
            <h2>ALBUM</h2>
            <div style={{display: 'flex', gap: '15px', flexWrap:'wrap'}}>
                {images.map((src, index)=>(
                    <img
                    key={index}
                    //Key 중요 -> 리액트는 뭐가 변경되었는지 수정해야됨 근데 얘가 효율적으로 가능하게해 
                    //리액트가 변경사항을 알아차리기 쉽게 하기 위해서 Key 사용
                    src={src}
                    alt={`기념사진&{index+1}`}
                    width="150"
                    />
                ))}
            </div>
        </div>
    )
} export default Gallery
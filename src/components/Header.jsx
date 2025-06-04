import { useEffect, useState, useRef } from "react";

function Header(){

    const [isVisble, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)
    useEffect(()=>{
        const handleScroll=()=>{
            const currentScrollY = window.scrollY

            if(currentScrollY > lastScrollY.current){
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current=currentScrollY
        }
        window.addEventListener('scroll', handleScroll)

        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])



    return(
        <header
            style={{

                position:'sticky',
                top:0,
                backgroundColor:'white',
                transition:'transform 0.3s ease',
                transform:isVisble?'translateY(0)':'translateY(-100%)',
                zIndex:1000,
                padding:'20px',
                textAlign:'center',
                boxShadow:'0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h2>전영호 | 연아윤 결혼식</h2>
            {/* <p>30 | 11 | 30</p>
            <p>S A T U R D A Y</p>
            <p>2030.11.30 SAT 14:00 PM</p> */}
        </header>
    )
}
export default Header;
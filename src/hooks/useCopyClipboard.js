import {useState} from 'react'

function useCopyboard(timeout=2000){
    const [copied, setCopied] = useState(false)

    const copy = (text) => {
        if (!navigator?.clipboard){
            console.warn("클립보드를 사용할 수 없습니다!")
            return
        }

        navigator.clipboard.writeText(text)
        .then(()=>{
            setCopied(true)
            setTimeout(()=>setCopied(false), timeout)
        })
        .catch((err)=> console.error("복사실패:", err))
    }
    return {copy, copied}
} export default useCopyboard
import {useState} from 'react'

function Guestbook(){
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const[entries, setEntries]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!name.trim() || !message.trim()) return

        const newEntry ={
            name,
            message,
            date : new Date().toLocaleDateString()
        }

        setEntries([newEntry, ...entries])
        setName('')
        setMessage('')
    }

    return(
        <section>
            <h2>방명록</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='이름'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <br/>
                <textarea
                    placeholder='축하메시지'
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                />
                <br/>
                <button type="submit">남기기</button>
            </form>

            <div>
                {entries.length===0 ?(
                    <p>방명록이 아직 없어요. 메시지를 남겨주세요!</p>
                ) : (
                    entries.map((entry, index)=>(
                        <div
                            key={index}
                            style={{
                                borderBottom: '1px solid #ccc',
                                marginBottom: '10px',
                                paddingBottom: '10px'
                            }}
                        >

                            <strong>{entry.name}</strong>({entry.date})
                            <p>{entry.message}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default Guestbook
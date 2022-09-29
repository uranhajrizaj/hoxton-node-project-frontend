import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi"
import io from "socket.io-client";

export function Connversation({ selectedFriend, currentuser }: any) {
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState<any>(null)

    useEffect(() => {
        const socket = io("ws://localhost:4555");
        setSocket(socket)
        console.log(socket)
        socket.on("message",(messages)=>{
            setMessages(messages)
        })     
    }, [])
    
    console.log(messages)
    return (
        <div className="conversation">
            <header>
                <img src={selectedFriend.image} />
                <p>{selectedFriend.name}</p>
            </header>
            <div className='messsages'>
                <div className='friend_messsage'>
                    <ul className='messsages_list'>
                    {messages.map((msg) => <li>{msg.user.name}: {msg.content}</li>
                    )}
                    </ul>
                   
                </div>
            </div>
            <form className='send-message' onSubmit={(e) => {
                e.preventDefault()
                if (e.target.text.value) {
                    socket.emit('message',{content:e.target.text.value, user: currentuser} );
                    e.target.text.value = '';
                }
            }}>
                <input name="text" placeholder='Send a message here....' />
                <BiSend className='sent-icon' />
            </form>
        </div>
    )
}
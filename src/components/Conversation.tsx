import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi"
import io from "socket.io-client";

export function Connversation({ selectedFriend, currentuser }: any) {
    const [messages, setMessages] = useState(["hello"])
    const socket = io();

    socket.on('chat message', function (msg) {
        setMessages([...messages, msg])
    })
    return (
        <div className="conversation">
            <header>
                <img src={selectedFriend.image} />
                <p>{selectedFriend.name}</p>
            </header>
            <div className='messsages'>
                <div className='friend_messsage'>
                    {messages.map((msg) => <li>{msg}</li>
                    )}
                </div>
            </div>
            <form className='send-message' onSubmit={(e) => {
                e.preventDefault
                if (e.target.text.value) {
                    socket.emit('chat message', e.target.text.value);
                    e.target.text.value = '';
                }
            }}>
                <input name="text" placeholder='Send a message here....' />
                <BiSend className='sent-icon' />
            </form>
        </div>
    )
}
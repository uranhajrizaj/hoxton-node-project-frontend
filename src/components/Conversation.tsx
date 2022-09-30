import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi"
import io from "socket.io-client";
// import Socket from "socket.io"

export function Connversation({ selectedFriend, currentuser }: any) {
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState<any>(null)
    const [room, setRoom] = useState(null)

    console.log("room:", room)
    useEffect(() => {
        const socket = io("ws://localhost:4555");
        setSocket(socket)
        console.log(socket)
        socket.on("message", (messages) => {
            setMessages(messages)
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:4001/friendship", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                friend2Id: Number(selectedFriend.id),
                friend1Id: Number(currentuser.id)
            }),
        })
            .then((resp) => resp.json())
            .then(data => {
                if (data.room) setRoom(data.room)
                else {
                    fetch("http://localhost:4001/friendship", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({

                            friend2Id: Number(currentuser.id),
                            friend1Id: Number(selectedFriend.id)
                        }),
                    })
                        .then(resp => resp.json())
                        .then(data => setRoom(data.room))
                }
            })
    }, [selectedFriend])
    // useEffect(() => {
    //     const socket = new Socket("ws://localhost:4555")
    //     return () => socket.disconnect()
    //   }, [])

    console.log(messages)
    return (
        <div className="conversation">
            <header>
                <img  className="friend_image"src={selectedFriend.image} />
                <p>{selectedFriend.name}</p>
            </header>
            <div className='messsages'>
                <ul className='messsages_list'>
                    {messages.map((msg) => room === 1 ?
                        <li className={msg.user.name === currentuser.name ? "my_message" : "friend_message"}>
                            <div className={msg.user.name === currentuser.name ? "my_messagediv" : "friend_messagediv"}>
                                <p className="message_sender">{msg.user.name}</p>
                                <p className="message_content">{msg.content}</p>
                            </div>
                        </li>
                        :
                        null
                    )}
                </ul>
            </div>
            <form className='send-message' onSubmit={(e) => {
                e.preventDefault()
                if (e.target.text.value) {
                    socket.emit('message', { content: e.target.text.value, user: currentuser });
                    e.target.text.value = '';
                }
            }}>
                <input name="text" placeholder='Send a message here....' />
                <BiSend className='sent-icon' />
            </form>
        </div>
    )
}
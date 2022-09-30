
import { useState } from 'react';
import { Connversation } from '../components/Conversation';
import { Friends } from '../components/Friends';
import { LeftMenu } from '../components/LeftMenu';
import "./chat.css"

export function Chat({ signOut, currentuser }: any) {
    const [selectedFriend, setselectedFriend] = useState(null)
    if (!currentuser) return <p>Loading....</p>
    return (
        <div className="chat">
            <LeftMenu signout={signOut} currentuser={currentuser} />
            <Friends currentuser={currentuser} setselectedFriend={setselectedFriend} />
            {selectedFriend ?
                <Connversation selectedFriend={selectedFriend} currentuser={currentuser} />
                :
                <div className="conversation selectedfriend">
                    <div className="info">
                        <p className='text'>Choose a friend to have a chat...</p>
                        <p className='sticker'>😕</p>
                    </div>
                </div>
            }
        </div>

    )
}
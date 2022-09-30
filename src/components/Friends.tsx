import { useState } from "react"
import "../pages/chat.css"

export function Friends({ currentuser, setselectedFriend }: any) {
    const [friendLi, setFriend] = useState(null)
    return (
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends' />
            </form>
            <ul className='your-friends'>
                {currentuser.friends?.map((friend: any) => {
                    return <li onClick={() => {
                        setselectedFriend(friend)
                        setFriend(friend)
                        console.log(friend)
                    }} className={
                        //@ts-ignore
                        friendLi?.id === friend.id ? "friend_li_selected" : "friend_li"} >
                        <img src={friend.image} />
                        <p>{friend.name}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
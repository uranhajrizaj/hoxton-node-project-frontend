import "../pages/chat.css"

export function Friends({ currentuser, setselectedFriend }: any) {
    return (
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends' />
            </form>
            <ul className='your-friends'>
                {currentuser.friends?.map((friend: any) => {
                    return <li onClick={() => { setselectedFriend(friend) }}>
                        <img src={friend.image} />
                        <p>{friend.name}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
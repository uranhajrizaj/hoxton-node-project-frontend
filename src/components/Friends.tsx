import "../pages/chat.css"

export function Friends({ currentuser, setselectedFriend }: any) {
    return (
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends' />
            </form>
            <ul className='your-friends'>
                {currentuser.following.map((firend: any) => {
                    return <li onClick={() => { setselectedFriend(firend.friend2) }}>
                        <img src={firend.friend2.image} />
                        <p>{firend.friend2.name}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
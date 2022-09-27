import "../pages/chat.css"

export function Friends(){
    return(
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends'/>
            </form>
         <ul className='your-friends'>
            <li>
            <img src="https://images.pexels.com/photos/13727429/pexels-photo-13727429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            <p>Uran Hajrizaj</p>
            </li>
            <li>
            <img src="https://images.pexels.com/photos/12009329/pexels-photo-12009329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            <p>Ergi Boja</p>
            </li>
         </ul>
        </div>
    )
}
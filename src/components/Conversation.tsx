import { BiSend } from "react-icons/bi"
import "../pages/chat.css"

export function Connversation() {
    return (
        <div className="conversation">
            <header> 
            <img src="https://images.pexels.com/photos/12009329/pexels-photo-12009329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            <p>Ergi Boja</p>
            </header>
             <div className='messsages'>
            
            <div className='friend_messsage'>
            <img src="https://images.pexels.com/photos/13727429/pexels-photo-13727429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            <div >
                <p>Uran </p>
                <p>Hello Ergi</p>
            </div>
            </div >
            <div className='my_messsage'>
            <div>
                <p>Me</p>
                <p>Hello Uran</p>
            </div>
            <img src="https://images.pexels.com/photos/12009329/pexels-photo-12009329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            </div>
         
             </div>
            <form className='send-message'>
                <input placeholder='Send a message here....'/>
                <BiSend className='sent-icon'/>
            </form>
        </div>
    )
}
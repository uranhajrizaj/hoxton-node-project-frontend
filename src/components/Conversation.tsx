import { BiSend } from "react-icons/bi"
import "../pages/chat.css"

export function Connversation() {
    return (
        <div className="conversation">
            <header className="conversationheader"> 
            <div className="friendcard">
            <img  className="avatarimg"src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <div className="pcontainer">
            <p className="conversationp">Ergi Boja</p>
            <p className="onlinep">Is Online</p>
            </div>
            </div>
            </header>
            <div className="msger-chat">
    <div className="msg left-msg">
      

      <div className="msg-bubble">
        <div className="msg-info">
          
          <div className="msg-info-time">12:45</div>
        </div>

        <div className="msg-text">
       Ckemi 
        </div>
      </div>
    </div>

    <div className="msg right-msg">
      

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">ME</div>
          <div className="msg-info-time">12:46</div>
        </div>

        <div className="msg-text">
        HEllo
        </div>
      </div>
      
    </div>
  </div>

            
            
  <form className="msger-inputarea">
    <input type="text" className="msger-input" placeholder="Enter your message..."/>
    <button type="submit" className="msger-send-btn">Send</button>
  </form>
  </div>
        
    )
}
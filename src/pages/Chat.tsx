import { Connversation } from '../components/Conversation';
import { Friends } from '../components/Friends';
import { LeftMenu } from '../components/LeftMenu';
import "./chat.css"

export function Chat(){
    return(
        <div className="chat">
          <LeftMenu/>
          <Friends/>
          <Connversation/>
        </div>

    )
}
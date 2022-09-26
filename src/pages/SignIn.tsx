import { Link } from "react-router-dom";
import "./signin.css"
export function SignIn(){
    return(
        <div className="signIn">
            
        <form>
            <h1>Hi There</h1>
            <div className="form_content">
            <input placeholder="Enter your email" type="email" required/>
            <input placeholder="Enter your passwaord" type="password" required/>
             <p> No account? <Link to="/sign_out"> Create one!</Link></p>
             <button >Sign In</button> 
            </div>
        </form>
        </div>
    )
}
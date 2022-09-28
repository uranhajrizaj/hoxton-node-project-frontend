import { Link, useNavigate } from "react-router-dom";
import "./signin.css"
export function SignIn(){

    const navigate=useNavigate()
    return(
        <section className="sectioni">
        <div className="container">
            <form id="loginform">
                <h1 className="loginh1">Login</h1>
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email"   required placeholder="Enter Your Email:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password"   required placeholder="Enter Your Password:" />
                </div>
                <button className="loginbtn" onClick={()=>{
                navigate("/chat")
             }}  type="submit" value="Submit">Login</button>
                <p className="error"></p>
                <p ></p>
                <h2 className="formh2">Don't have an account ? <Link to="/sign_out">SignUp Now</Link> </h2>




            </form>













        </div>
        </section>

    )
}
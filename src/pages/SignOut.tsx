import "./signin.css"
import { Link, useNavigate } from "react-router-dom";

export function SignOut(){

    return(
        <section className='registersec'>
            <div className="container">
                <form id='form' className='registerForm' >

                    <h1 className="loginh1">Register</h1>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="Name"
                            required placeholder="Enter Your FirstName:" />
                    </div>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="Name"
                            required placeholder="Enter Your LastName:" />
                    </div>
                    <div className="input-field">

                        <span className="material-symbols-outlined">
                            image
                        </span>  <input type="Text" id="Name"
                            placeholder="Insert an Image:" />
                    </div>

                    <div className="input-field">
                        <i className="uil uil-envelope icon"></i><input type="email" id="email"
                            required placeholder="Enter Your Email:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" id="password" minLength={4}
                            required placeholder="Enter Your Password:" />
                    </div>
                    {/* <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password2" minLength={4}
                required placeholder="Confirm Your Password:" />
                    <p className='error'></p>
                </div> */}
                    <button type="submit" value="Submit" className="loginbtn"  >Register</button>
                    <p></p>
                    <h2 className="formh2">Are you already a member ? <Link to="/sign_in">Sign In</Link> </h2>




                </form>













            </div>
        </section>
    )
}
import "./signin.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignOut({ signIn }: any) {
    const [signOutError, setSignOutError] = useState("")
    const navigate=useNavigate()
    return (
        <section className='registersec'>
            <div className="container">
                <form id='form' className='registerForm' onSubmit={(e) => {
                    e.preventDefault()
                    const body = {
                        //@ts-ignore
                        name: e.target.name.value,
                        //@ts-ignore
                        surname: e.target.surname.value,
                        //@ts-ignore
                        email: e.target.email.value,
                        //@ts-ignore
                        password: e.target.password.value,
                        //@ts-ignore
                        image: e.target.image.value,
                    }
                    console.log(body)
                    fetch(`http://localhost:4001/sign-up`, {
                        method: `POST`,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    }).then((resp) => resp.json())
                        .then(data => {
                            if (data.error) {
                                setSignOutError(data.error)
                            } else {
                                signIn(data)
                                navigate('/chat')
                            }
                        })
                }}>
                    <h1 className="loginh1">Register</h1>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="Name" name="name"
                            required placeholder="Enter Your FirstName:" />
                    </div>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="Name"  name="surname"
                            required placeholder="Enter Your LastName:" />
                    </div>
                    <div className="input-field">

                        <span className="material-symbols-outlined">
                            image
                        </span>  <input type="Text" id="Name" name="image"
                            placeholder="Insert an Image:" />
                    </div>

                    <div className="input-field">
                        <i className="uil uil-envelope icon"></i><input type="email" id="email" name="email"
                            required placeholder="Enter Your Email:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" id="password" name="password"minLength={4}
                            required placeholder="Enter Your Password:" />
                    </div>
                     <p>{signOutError}</p>
                    <button type="submit" value="Submit" className="loginbtn" >Register</button>
                    <p></p>
                    <h2 className="formh2">Are you already a member ? <Link to="/sign_in">Sign In</Link> </h2>
                </form>
            </div>
        </section>
    )
}
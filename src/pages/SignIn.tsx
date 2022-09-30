import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css"
type Prop = {
    signIn: (data: object) => void
}
export function SignIn({ signIn }: Prop) {
    const [signInError, setSignInError] = useState("")
    const navigate = useNavigate()
    return (
        <section className="sectioni">
            <div className="container">
                <form id="loginform" onSubmit={(e) => {
                    e.preventDefault()
                    const body = {
                        //@ts-ignore
                        email: e.target.email.value,
                        //@ts-ignore
                        password: e.target.password.value
                    }
                    fetch(`http://localhost:4001/sign-in`, {
                        method: `POST`,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    }).then((resp) => resp.json())
                        .then(data => {
                            if (data.error) {
                                setSignInError(data.error)
                            } else {
                                signIn(data)
                                navigate('/chat')
                            }
                        })
                }}>
                    <h1 className="loginh1">Login</h1>
                    <div className="input-field">
                        <i className="uil uil-envelope icon"></i><input type="email" name="email" required placeholder="Enter Your Email:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" name="password" required placeholder="Enter Your Password:" />
                    </div>
                    <button className="loginbtn" type="submit" value="Submit">Login</button>
                    <p className="error"> {signInError}</p>
                    <p ></p>
                    <h2 className="formh2">Don't have an account ? <Link to="/sign_out">SignUp Now</Link> </h2>
                </form>
            </div>
        </section>

    )
}
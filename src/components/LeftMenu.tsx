
import { AiOutlineLogout } from "react-icons/ai"
import { useNavigate } from "react-router-dom"


export function LeftMenu({ signOut, currentuser }: any) {
    const navigate = useNavigate()
    if (!currentuser) return <p>Lodaing...</p>
    return (
        <div className="left_menu">
            <img src={currentuser.image} />
            <AiOutlineLogout className="sign_out" onClick={() => {
                signOut
                navigate("/sign_in")
            }} />
        </div>
    )
}
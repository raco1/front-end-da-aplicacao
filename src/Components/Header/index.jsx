import { Container, Profile, Search } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ children }){
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut(){
        navigate("/")
        signOut()
    }
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                { children }
            </Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button type="button" onClick={ handleSignOut }>exit</button>
                </div>

                <Link to="/profile">
                    <img 
                        src={avatarURL} 
                        alt="User profile picture" 
                    />
                </Link>
            </Profile>
        </Container>
    )
}
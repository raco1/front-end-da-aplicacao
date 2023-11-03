import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <input 
                type="text"
                placeholder="Search by title"
            />

            <Profile>
                <div>
                    <strong>Rafael Coelho</strong>
                    <button type="button">exit</button>
                </div>

                <Link to="/profile">
                    <img 
                        src="https://github.com/raco1.png" 
                        alt="User profile picture" 
                    />
                </Link>
            </Profile>
        </Container>
    )
}
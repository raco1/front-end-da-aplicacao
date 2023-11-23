import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from '../../Components/Input'
import { Link } from "react-router-dom";
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock} from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const { signIn } = useAuth()

    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn(){
        signIn({ email, password})
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to follow everything you watch.</p>
                <h2>Log In</h2>

                <Input icon={FiMail} type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <Input icon={FiLock} type="password" placeholder="Passowrd" onChange={e => setPassword(e.target.value)}/>

                <Button title="Enter" onClick={handleSignIn}/>

                <ButtonText>
                   <Link to="/register">
                        Create an account
                   </Link>
                </ButtonText>
            </Form>

            <Background />
        </Container>
    )
}
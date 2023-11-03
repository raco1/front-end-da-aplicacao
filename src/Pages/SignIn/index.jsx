import { Container, Form, Background } from "./styles";
import { Input } from '../../Components/Input'
import { Link } from "react-router-dom";
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock} from "react-icons/fi";

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to follow everything you watch.</p>
                <h2>Log In</h2>

                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Passowrd"/>

                <Button title="Enter"/>

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
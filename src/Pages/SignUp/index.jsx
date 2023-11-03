import { Container, Form, Background } from "./styles";
import { Input } from '../../Components/Input'
import { Link } from "react-router-dom";
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to follow everything you watch.</p>
                <h2>Create your account</h2>

                <Input icon={FiUser} type="text" placeholder="Name"/>
                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Passowrd"/>

                <Button title="Sign Up"/>

                <ButtonText > 
                    <AiOutlineArrowLeft size={20}/>
                    <Link to="/">
                        Back to Log In
                   </Link>
                </ButtonText>
            </Form>

            <Background />
        </Container>
    )
}
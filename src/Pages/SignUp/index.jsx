import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import { Container, Form, Background } from "./styles";
import { Input } from '../../Components/Input'
import { Link } from "react-router-dom";
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            alert("Please, fill in all the fields to register.")
        }
        api.post("/users", {name, email, password})
        .then(() => {
            alert("User successfully registered!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("User could not be registered.")
            }
        })
        
    }
        
    
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Application to follow everything you watch.</p>
                <h2>Create your account</h2>

                <Input icon={FiUser} type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                <Input icon={FiMail} type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <Input icon={FiLock} type="password" placeholder="Passowrd" onChange={e => setPassword(e.target.value)}/>

                <Button title="Sign Up" onClick={handleSignUp}/>

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
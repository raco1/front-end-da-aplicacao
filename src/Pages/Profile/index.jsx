import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { ButtonText } from "../../Components/ButtonText";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Input } from "../../Components/Input"
import { FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Button } from "../../Components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <ButtonText icon={BiLeftArrowAlt}>
                    <Link to="/">
                        back
                    </Link>
                </ButtonText>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/raco1.png" alt="Profile picture" />
                    <label htmlFor="avatar">    
                        <FiCamera/>
                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>
                <Input 
                    type="text"
                    placeholder = "Rafael Coelho"
                    icon={FiUser}
                />

                <Input 
                    type="text"
                    placeholder = "rafael@gmail.com"
                    icon={FiMail}
                />

                <Input 
                    type="password"
                    placeholder = "Old password"
                    icon={FiLock}
                />

                <Input 
                    type="password"
                    placeholder = "New password"
                    icon={FiLock}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}
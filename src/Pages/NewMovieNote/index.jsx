import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../../Components/Header";
import { Textarea } from "../../Components/Textarea";
import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { TagItem } from "../../Components/TagItem";
import { Input } from "../../Components/Input";
import { BiLeftArrowAlt } from "react-icons/bi";

export function NewMovieNote(){
    const navigate = useNavigate()
    
    function handleBack(){
        navigate(-1)
    }
    
    return(
        <Container>
            <Header />
          
            <main>
                
                <ButtonText icon={BiLeftArrowAlt} onClick={handleBack}>
                    back
                </ButtonText>
                <h1>New Movie</h1>

                <Form>
                    <div className="col-inputs">
                        <Input type="text" placeholder="Title"/>
                        <Input type="text" placeholder="Your rating (from 0 to 5)"/>
                    </div>
                    
                    <Textarea placeholder="Comments"/>

                    <h2>Tags</h2>

                    <section>
                        <TagItem value="https://github.com"/>
                        <TagItem $isnew/>
                    </section>

                    <Button title="Save"/>
                    
                </Form>

            </main>
            
        </Container>
    )
}
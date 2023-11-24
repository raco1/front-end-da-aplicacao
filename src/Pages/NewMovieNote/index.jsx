import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

import { Container, Form } from "./styles";
import { Input } from "../../Components/Input";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { TagItem } from "../../Components/TagItem";
import { Textarea } from "../../Components/Textarea";
import { ButtonText } from "../../Components/ButtonText";

export function NewMovieNote(){
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState()
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleBack(){
        navigate(-1)
    }

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTags(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }
    
    async function handleCreateNote(){
        await api.post("/notes", { title, rating, description, tags })

        alert("Movie note successfully created!")

        handleBack()
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
                        <Input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                        <Input type="text" placeholder="Your rating (from 0 to 5)" onChange={e => setRating(e.target.value)}/>
                    </div>
                    
                    <Textarea placeholder="Comments" onChange={e => setDescription(e.target.value)}/>

                    <h2>Tags</h2>

                    <section>
                        {
                            tags.map((tag, index) => (
                                <TagItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTags(tag)}
                                />
                            ))
                                
                        }

                        <TagItem 
                            $isnew 
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTags}
                            />
                    </section>

                    <Button title="Save" onClick={handleCreateNote}/>
                    
                </Form>

            </main>
            
        </Container>
    )
}
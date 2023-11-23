import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { BiPlus } from "react-icons/bi";
import { Container, Content } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { MovieNote } from "../../Components/MovieNote";

export function Home(){
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    function handleAddMovie(){
        navigate("/newmovie")
    }
    function handleMovieView(id){
        navigate(`/movieview/${id}`)
    }

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [search])
    return(
        <Container>

            <Header>
                <Input
                    placeholder="Search by title"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <main> 
                    <Section title="My movies">
                        <Button icon={BiPlus} title="Add movie" onClick={handleAddMovie}/>
                    </Section>


                    <Content>
                    {
                        notes && notes.map(note => (
                            <MovieNote 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleMovieView(note.id)}
                            />   
                        ))  
                    }    
                    </Content>     
            </main>
        </Container>
    );
}
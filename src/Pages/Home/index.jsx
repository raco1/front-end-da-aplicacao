import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";
import { BiPlus } from "react-icons/bi";
import { MovieNote } from "../../Components/MovieNote";
import { Input } from "../../Components/Input";

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
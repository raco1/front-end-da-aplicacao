import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

import { Rate } from 'antd';
import swal from 'sweetalert';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Container, Content } from './styles';
import { BiLeftArrowAlt } from "react-icons/bi";
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/tag'
import { ButtonText } from '../../Components/ButtonText';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function MovieView(){
    const navigate = useNavigate()

    const { user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const params = useParams()
    const [data, setData] = useState(null)
    
    function handleBack(){
        navigate(-1)
    }

    async function deleteMovieNote(){
        const confirm = window.confirm("Are you sure you want delete this move note?")

        if(confirm){
            api.delete(`/notes/${params.id}`)
            handleBack()
        }
    }
    

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }
        fetchMovie()
    }, [])
    return(
        <Container>
            <Header />

            {
                data &&
                <main>
                <ButtonText icon={BiLeftArrowAlt} onClick={handleBack}>
                        back
                </ButtonText>

                <Content>
                    <header>
                        <h3>{data.title}</h3>
                        <Rate count={5} defaultValue ={data.rating} disabled className="rating" style={{color: `#FF859B`}}/>
                    </header>
                   
                    <span>
                        <img src={avatarURL} alt="User profile picture" />
                        <p>By {user.name}</p>
                        <ClockCircleOutlined />
                        <p>{data.created_at}</p>
                    </span>

                    {
                        data.tags && (
                        <footer>
                                {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
                        </footer>
                    )}
                    
                    <p>{data.description}</p>

                </Content>
                    <Button title="Delete note" onClick={deleteMovieNote}/>

            </main>
            }

                
        </Container>
    )
}
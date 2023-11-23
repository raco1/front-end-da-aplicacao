import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Form, Avatar } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ButtonText } from "../../Components/ButtonText";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Input } from "../../Components/Input"
import { FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Button } from "../../Components/Button";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile(){
    const { user, updateProfile } = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    function handleBack(){
        navigate(-1)
    }

    async function handleSaveProfile(){
        const updated = {
            name,
            email,
            old_password: oldPassword,
            password: newPassword
        }

        const userUpdated = Object.assign(user, updated)
        await updateProfile({ user: userUpdated, avatarFile})
    }

    function handleAvatarUpdate(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imgPreview = URL.createObjectURL(file)
        setAvatar(imgPreview)
    }

    return(
        <Container>
            <header>
                <ButtonText icon={BiLeftArrowAlt} onClick={handleBack}>        
                        back
                </ButtonText>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Profile picture" />
                    <label htmlFor="avatar">    
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={handleAvatarUpdate}/>
                    </label>
                </Avatar>
                <Input 
                    type="text"
                    placeholder = "Rafael Coelho"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    type="text"
                    placeholder = "rafael@gmail.com"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type="password"
                    placeholder = "Old password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input 
                    type="password"
                    placeholder = "New password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Save" onClick={handleSaveProfile}/>
            </Form>
        </Container>
    )
}
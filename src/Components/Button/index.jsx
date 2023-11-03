import { Container } from "./styles";

export function Button({icon: Icon, title, loading }){
    return(
        <Container type="button" disabled={loading}>
            {Icon && <Icon/>}
            { title }
        </Container>
    )
}